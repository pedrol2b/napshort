import React, { useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { Header, Logo, Menu, NavLang } from '../components/Home/Header'
import { Position, Container, Title, Boxed, BoxedData, DataWrapper } from '../components/Home/Content'
import { Footer, Author, FAB } from '../components/Home/Footer'
import Nap from '../assets/nap.svg'
import { FaAdjust, FaCookieBite, FaArrowRight, FaHeart, FaGithub } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { enUS, ptBR } from '../assets/locale/Home'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
const DynamicShort = dynamic(() => import('../components/Home/Short'), {
  ssr: false,
})

interface Props {
  toggleTheme(): void
}

const Home: NextPage<Props> = ({ toggleTheme }) => {
  const [seed, setSeed] = useState(1) // eslint-disable-line
  const reload = () => setSeed(Math.random())

  var shortCookie = getCookie('short') || JSON.stringify({ short: [] })
  const [short, pushShort] = useState(JSON.parse(shortCookie.toString()))

  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { locale } = router

  const handleToggle = (CurrentLocale) => {
    if (locale === CurrentLocale) return
    switch (locale) {
      case 'pt-BR':
        router.push('/', '/', { locale: 'en-US' })
        break
      case 'en-US':
        router.push('/', '/', { locale: 'pt-BR' })
        break
    }
  }

  const toValidate = (e) => {
    const { value } = e.target
    if (value === '') return (document.querySelector<HTMLElement>('span.error').style.display = 'none')

    if (!/http:\/\/|https:\/\//g.test(value)) {
      document.querySelector<HTMLElement>('span.error').style.display = 'inline-block'
      document.querySelector<HTMLElement>('span.error').textContent = `"${value}" ${
        locale === 'en-US' ? enUS['is not a valid link'] : ptBR['is not a valid link']
      }`
    } else {
      document.querySelector<HTMLElement>('span.error').style.display = 'none'
    }
  }

  const onSubmit = async (data) => {
    if (!data.url) return
    if (!/http:\/\/|https:\/\//g.test(data.url)) return

    try {
      await axios
        .post('/api/short', data)
        .then((_) => {
          document.querySelector<HTMLElement>('span.error').style.display = 'none'
          const { url, shorturl } = _.data.short

          short.short.push({ url, shorturl })
          pushShort(short)
          setCookie('short', short, { maxAge: 60 * 6 * 24 })
          reload()

          document.querySelector<HTMLInputElement>('input[name="url"]').value = ''
        })
        .catch(() => {
          document.querySelector<HTMLElement>('span.error').style.display = 'inline-block'
          document.querySelector<HTMLElement>('span.error').textContent =
            locale === 'en-US'
              ? enUS['something went wrong try again later']
              : ptBR['something went wrong try again later']
        })
    } catch (e) {}
  }

  return (
    <>
      <Head>
        <title>{locale === 'en-US' ? enUS.title : ptBR.title}</title>
      </Head>
      <Header>
        <Logo onClick={() => window.location.reload()}>
          <Nap />
          <p>NapShort</p>
        </Logo>
        <Menu>
          <FaAdjust onClick={toggleTheme} />
          <NavLang>
            <div className="NavLang-long">
              <span onClick={() => handleToggle('en-US')} className={locale === 'en-US' ? 'active' : ''}>
                {locale === 'en-US' ? enUS.english : ptBR.english}
              </span>
              <span onClick={() => handleToggle('pt-BR')} className={locale === 'en-US' ? '' : 'active'}>
                {locale === 'en-US' ? enUS.portuguese : ptBR.portuguese}
              </span>
            </div>
            <div className="NavLang-short">
              <span onClick={() => handleToggle('en-US')} className={locale === 'en-US' ? 'active' : ''}>
                en
              </span>
              <span onClick={() => handleToggle('pt-BR')} className={locale === 'en-US' ? '' : 'active'}>
                pt
              </span>
            </div>
          </NavLang>
        </Menu>
      </Header>
      <Position>
        <Container>
          <Title>
            <h2>{locale === 'en-US' ? enUS['shrink your links in a snap'] : ptBR['shrink your links in a snap']}</h2>
            <h3>{locale === 'en-US' ? enUS['it is completely free'] : ptBR['it is completely free']}</h3>
          </Title>
          <Boxed>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                onChangeCapture={toValidate}
                autoFocus
                required
                {...register('url')}
                placeholder="https://www.google.com"
                type="text"
              />
              <button type="submit">
                <FaArrowRight />
              </button>
            </form>
            <span className="error" />
          </Boxed>
          <BoxedData>
            <h3>
              <FaCookieBite />
              {locale === 'en-US' ? enUS['stored links'] : ptBR['stored links']}
            </h3>
            <DataWrapper>
              <DynamicShort short={short.short} />
            </DataWrapper>
          </BoxedData>
        </Container>
      </Position>
      <Footer>
        <Author>
          {locale === 'en-US' ? enUS['made with'] : ptBR['made with']}
          <FaHeart />
          {locale === 'en-US' ? enUS.by : ptBR.by} <a href="https://github.com/pedrolbb">pedrolbb</a>
        </Author>
      </Footer>
      <FAB onClick={() => window.location.assign('https://github.com/pedrolbb/napshort')}>
        <FaGithub />
      </FAB>
    </>
  )
}

export default Home
