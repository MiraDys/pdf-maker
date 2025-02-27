# PDF Rendering in JavaScript

This project provides a basic implementation of PDF rendering in JavaScript, comparing different libraries and their capabilities.

## Overview

- **HTML2Canvas + jsPDF**: Captures a "screenshot" of the DOM and renders it as an image in a PDF. Note that text is not selectable, which may not be ideal for business use cases where text copying or searching is required.
- **@react-pdf/renderer**: Renders the DOM as is, allowing text to be selectable.

## Requirements

To run this project, ensure you have the following installed:

- [Vite](https://vitejs.dev/)
- [@react-pdf/renderer](https://react-pdf.org/)
- [HTML2Canvas](https://html2canvas.hertzen.com/)
- [jsPDF](https://github.com/parallax/jsPDF)

## Installation

1. `git clone`
2. `cd pdf-maker`
3. `pnpm install`
4. `pnpm dev`
