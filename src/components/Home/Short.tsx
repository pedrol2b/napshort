import React from 'react'
import { NextPage } from 'next'
import { FaCopy } from 'react-icons/fa'
import { LinkWrapper, Link } from '../Home/Content'

interface Props {
  short: []
}

const Short: NextPage<Props> = ({ short }) => {
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
                    navigator.clipboard.writeText(href + shorturl)
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
