
# capture

Lambda function to convert a URL to PNG, JPEG, or GIF using PhantomJS.

## Installation

Add capture to your Apex project:

```
$ git submodule add https://github.com/apex/capture.git functions/capture
```

Deploy it:

```
$ apex deploy capture
```

Try it:

```
$ apex invoke capture < functions/capture/event.json
```

## API

Input:

 - `url` (string) URL to render
 - `format` (string) output format, one of 'png', 'jpeg', or 'gif' (default: 'png')
 - `viewport` (object) viewport size with .width and .height (default: 1024x800)
 - `clip` (object) clip rect with .top, .left, .width, and .height (default: none)
 - `zoom` (number) zoom factor (default: 1)
 - `wait` (number) wait time in milliseconds (default: 250)
 - `backgroundColor` (string) body background color (default: none)

Output:

 - `capture` (string) base64 output

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)
[![](http://apex.sh/images/badge.svg)](https://apex.sh/ping/)

---

> [tjholowaychuk.com](http://tjholowaychuk.com) &nbsp;&middot;&nbsp;
> GitHub [@tj](https://github.com/tj) &nbsp;&middot;&nbsp;
> Twitter [@tjholowaychuk](https://twitter.com/tjholowaychuk)
