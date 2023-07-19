import * as Dialog from '@radix-ui/react-dialog'
import Image from "next/image";

import LogoImg from '../assets/Logo.svg'

import styles from '../styles/Home.module.css'
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Desenvolvendo uma web acessível | Rocketseat Blog</title>
    </Head>
        <header className={styles.header}>
          <Image src={LogoImg} width={286 / 2} alt="Blog da Rocketseat"/>
          <div className={styles.nav}>
          <a href="https://github.com" target="_blank" aria-label="Github">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M256 32C132.3 32 32 134.9 32 261.7a229.3 229.3 0 0 0 153.2 217.9c1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4l-.3-39.1c-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6a84.6 84.6 0 0 1 2.2-60.8s1.6-.5 5-.5c8.1 0 26.4 3.1 56.6 24.1a209.8 209.8 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5a84.6 84.6 0 0 1 2.2 60.8 90.3 90.3 0 0 1 23 61.6c0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4A229.2 229.2 0 0 0 480 261.7C480 134.9 379.7 32 256 32z" stroke="none"/></svg>
          </a>
          </div>
        </header>
      <main>
        <article className={styles.content}>
          <h1>Desenvolvendo uma web acessível</h1>
          <h2>Protocolos e diretrizes orientam o desenvolvimento de tecnologias acessíveis, mas é preciso olhar para além de tudo isso</h2>
          <p>Acessibilidade</p>
        </article>
      </main>
        <footer className={styles.footer}>
          <Image src={LogoImg} width={286 / 2} alt="Blog da Rocketseat"/>
          <nav className={styles.nav} aria-label="Rodapé">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button type="button" className={styles.termsButton}>
                  Termos de uso
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay} />

                <Dialog.Content className={styles.modal}>
                  <Dialog.Title>Termos de uso</Dialog.Title>
                  <Dialog.Description className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus faucibus metus tellus, eu laoreet enim commodo sit amet.
                    Ut molestie nisi eget ipsum maximus, ac malesuada dolor ullamcorper.
                    Nunc sed porttitor eros, quis euismod nibh.
                    Vestibulum blandit nulla id urna tempus, at fringilla odio luctus.
                    Aenean finibus, nisi eu pellentesque ultricies, quam nisl pretium elit, sed molestie dolor lectus nec metus.
                    Morbi pretium lectus sit amet augue maximus, nec ornare sapien ullamcorper.
                    Cras vestibulum tristique nulla, vel faucibus dui.
                    Vivamus aliquet orci non risus tempus viverra. Mauris facilisis finibus dapibus.
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button className={styles.closeModalButton}>
                      Fechar
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </nav>
        </footer>
    </>
  )
}
