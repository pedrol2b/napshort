import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Wrapper } from '../components/NapShort/Content'
import { enUS, ptBR } from '../assets/locale/NapShort'
import axios from 'axios'

const NapShort: NextPage = () => {
  const router = useRouter()
  const { locale } = router

  const { napshort } = router.query

  const goBack = () => {
    try {
      switch (locale) {
        case 'pt-BR':
          router.push('/', '/', { locale: 'pt-BR' })
          break
        case 'en-US':
          router.push('/', '/', { locale: 'en-US' })
          break
      }
    } catch (e) {}
  }

  async function searchShort(short) {
    try {
      await axios
        .get(`/api/${short}`)
        .then((_) => {
          const { short } = _.data
          window.location.assign(short.url)
        })
        .catch(() => goBack())
    } catch (e) {
      goBack()
    }
  }

  searchShort(napshort)

  return (
    <>
      <Head>
        <title>{locale === 'en-US' ? enUS.title : ptBR.title}</title>
      </Head>
      <Wrapper>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </Wrapper>
    </>
  )
}

export default NapShort
