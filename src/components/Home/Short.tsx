import React from 'react'
import { NextPage } from 'next'
import { FaCopy } from 'react-icons/fa'
import { LinkWrapper, Link } from '../Home/Content'

interface Props {
  short: []
}

declare global {
  interface Window {
    clipboardData: any // eslint-disable-line
  }
}

const Short: NextPage<Props> = ({ short }) => {
  const copy = (toCopy: string) => {
    if (window.clipboardData && window.clipboardData.setData) return window.clipboardData.setData('Text', toCopy)
    else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      var textarea = document.createElement('textarea')
      textarea.textContent = toCopy
      textarea.style.position = 'fixed'

      document.body.appendChild(textarea)
      textarea.select()
      try {
        return document.execCommand('copy')
      } catch (e) {
        console.warn('Copy to clipboard failed.', e)
      } finally {
        document.body.removeChild(textarea)
      }
    }
  }

  return (
    <>
      {short.map((c, i, arr) => {
        if (i < arr.length - 7) return ''

        var href = window.location.href.split('#')[0]
        if (href.charAt(href.length - 1) !== '/') href += '/'

        const { url, shorturl } = c
        return (
          <LinkWrapper key={i}>
            <Link>
              <span
                id="shorturl"
                onClick={() => {
                  try {
                    copy(href + shorturl)
                  } catch (e) {}
                }}
              >
                {href + shorturl}
                <FaCopy />
              </span>
              <br />
              <span id="url">{url}</span>
            </Link>
          </LinkWrapper>
        )
      })}
    </>
  )
}

export default Short
