# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains English learning tools for software developers. The main components are:

1. **Dictation Tool** (`dictation/` directory): An English sentence dictation application that allows users to practice listening skills with their own video and subtitle files.
2. **Listening Practice Tool** (`listening/` directory): A web-based platform for English listening practice with structured lessons.

## Codebase Structure

- `dictation/local-dictation.html`: Main application file for the English dictation tool (single-file HTML application)
- `dictation/README.md`: Documentation for the dictation tool
- `listening/index.html`: Main entry point for the listening practice tool
- `listening/components/`: Reusable UI components for the listening tool
- `listening/lessons/`: Lesson content and materials
- `README.md`: Main project documentation in Chinese

## Key Features

### Dictation Tool
- Upload MP4 video files and SRT subtitle files
- Sentence-by-sentence playback with precise timing control
- Interactive dictation input with real-time answer checking
- Word-level grading feedback with error highlighting
- Progress tracking with styled progress bar
- Keyboard shortcuts for playback control
- Sentence hiding functionality for increased difficulty
- Direct navigation to specific sentences

### Listening Practice Tool
- Structured lessons for English listening practice
- Reusable translation components
- Example implementations for reference

## Development Guidelines

### Architecture
- The dictation tool is a single-file HTML application with embedded CSS and JavaScript
- All functionality is contained within one file for portability
- No external dependencies or build tools required
- Pure client-side implementation using vanilla JavaScript

### File Organization
- Each tool is contained in its own directory
- Self-contained implementations with no cross-directory dependencies
- HTML files contain all necessary CSS and JavaScript

## Common Development Tasks

### Working with the Dictation Tool
1. The main application logic is in `dictation/local-dictation.html`
2. Key functions include:
   - `processSubtitles()`: Parses SRT subtitle files
   - `playCurrentSentence()`: Plays specific sentence segments
   - `checkAnswer()`: Compares user input with correct answers
   - `compareAnswersDetailed()`: Provides word-level feedback
3. UI updates are handled through direct DOM manipulation
4. Video playback uses HTML5 video element with time-based controls

### Modifying Functionality
1. Most changes will be in the JavaScript section of `dictation/local-dictation.html`
2. UI changes require modifications to both CSS styles and HTML structure
3. New features should follow the existing pattern of self-contained implementation

## Browser Compatibility

The tools are designed to work in modern browsers without any server requirements. They use standard HTML5, CSS3, and ES6 JavaScript features.

## Testing

Since this is a client-side only application, testing involves:
1. Opening HTML files directly in a browser
2. Testing functionality with sample video and subtitle files
3. Verifying cross-browser compatibility

No automated testing framework is used or required.