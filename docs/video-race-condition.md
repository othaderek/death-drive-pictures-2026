# Video Initialization Race Condition

## Overview

This document describes a race condition that occurred in the `Work.js` component when initializing video playback in the CRT TV screen. The issue caused videos to not properly fill the screen when the window was closed and reopened.

## Problem Description

### Symptoms
- Video would not fill the CRT screen properly on window reopen
- Video element would size incorrectly, appearing too small or not filling the container
- Issue was intermittent - worked on first load but failed on subsequent window opens

### Root Cause

The video initialization was happening **before** the CRT frame image finished loading. This created a race condition:

1. **setTimeout block executes immediately** when the Work component mounts
2. **Video src is set and `.play()` is called** - at this point, the `.crt-screen-container` has no height (it's `height: 100%` but the parent `.crt-frame` hasn't loaded yet)
3. **Video calculates its size** based on a container with `height: 0` or `height: auto`
4. **CRT frame image loads** and sets the container height via `crtScreenContainer.style.height = frameRect.height`
5. **Too late!** - Video has already calculated its dimensions incorrectly

### Code Flow (Before Fix)

```javascript
setTimeout(() => {
  // ❌ Video initialized immediately
  const crtVideo = container.querySelector('#crt-video');
  crtVideo.src = randomVideo;
  crtVideo.play(); // Container has no height yet!
  
  // ... later ...
  
  // ✅ Container height set, but video already sized incorrectly
  crtFrame.addEventListener('load', () => {
    crtScreenContainer.style.height = `${frameRect.height}px`;
  });
}, 0);
```

## Solution

### Approach

Move video initialization **inside** the CRT frame load handler, ensuring the container has proper dimensions before the video loads.

### Implementation

1. **Remove early video initialization** from the main setTimeout block
2. **Create an initialization function** that sets container height first, then initializes video
3. **Call this function** when the CRT frame image loads
4. **Handle cached images** - if the image is already loaded (cached), call the function immediately

### Code Flow (After Fix)

```javascript
setTimeout(() => {
  // ✅ Video selection happens, but initialization is deferred
  const videos = [ddpFlagVideoUrl, ddpSquashVideoUrl];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  
  // ... later ...
  
  // ✅ Container height set FIRST, then video initialized
  crtFrame.addEventListener('load', () => {
    const frameRect = crtFrame.getBoundingClientRect();
    crtScreenContainer.style.height = `${frameRect.height}px`; // Set height first
    
    // NOW initialize video with proper container dimensions
    const crtVideo = container.querySelector('#crt-video');
    crtVideo.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:fill;';
    crtVideo.src = randomVideo;
    crtVideo.load();
    crtVideo.play();
  });
  
  // Handle cached images
  if (crtFrame.complete) {
    initVideo(); // Call immediately if already loaded
  }
}, 0);
```

### Key Changes

1. **Video initialization moved inside load handler**: Ensures container has dimensions before video loads
2. **Explicit style setting**: Using `cssText` to set all styles at once before setting `src`
3. **Cached image handling**: Check `crtFrame.complete` to handle images that load synchronously

## Technical Details

### Why This Happens

- **CSS percentage heights** require a parent with an explicit height
- **Image loading is asynchronous** - even with cached images, the load event timing can vary
- **Video element sizing** happens when `src` is set, not when it plays
- **Window reopen** can cause timing differences due to browser caching and reflow

### Container Structure

```
.crt-wrapper
  └── .crt-frame (img) ← Loads asynchronously
      └── .crt-screen-container ← Needs frame height
          └── .crt-screen ← Video container
              └── <video> ← Needs screen dimensions
```

The `.crt-screen-container` uses `height: 100%`, which depends on `.crt-frame` having a computed height. Until the image loads, this height is `0` or `auto`.

## Prevention

### Best Practices

1. **Always initialize dependent elements after parent dimensions are known**
2. **Use load events** for images that affect layout
3. **Handle cached images** with `complete` property checks
4. **Set explicit styles** before setting video `src` to avoid default sizing

### Similar Issues to Watch For

- Any element that depends on image-loaded dimensions
- Video/audio elements that need to fill containers
- Elements using percentage heights with async-loaded parents
- Window reopen scenarios where timing may differ

## Related Files

- `src/pages/Work.js` - Main implementation
- `src/components/Window.js` - Window component that creates/destroys Work component

## Date

Fixed: [Current Date]
Author: Development Team

