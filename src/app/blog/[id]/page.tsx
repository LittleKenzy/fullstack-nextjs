import React from 'react'
import style from './page.module.css'
import Image from 'next/image'

const Blogpost = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}>Lorem, ipsum dolor.</h1>
          <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo ducimus necessitatibus doloremque unde dignissimos nesciunt dolore vero ab libero. Provident libero aperiam perspiciatis repellendus nulla, quod rerum tempora atque doloremque officiis accusamus est dolor corrupti consequuntur fuga cumque consequatur.</p>
          <div className={style.author}>
            <Image
              src="https://images.unsplash.com/photo-1748279944004-f1d733dc711b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>John Doe</span>
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image
            src="https://images.unsplash.com/photo-1754196415449-857e55f1b603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={400}
            height={250}
            className={style.image} 
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque nobis amet, velit iste modi sunt vero quae iure perferendis ex veritatis sint quasi hic nam, neque reprehenderit dolores ratione nesciunt, harum beatae? Excepturi asperiores quas atque sint magni odio, quidem sequi, quibusdam eveniet dolore magnam suscipit vitae. Voluptates aliquam quidem expedita! Explicabo iure quo sit illum aliquam magnam quibusdam fugit, consequatur inventore consectetur, praesentium officiis obcaecati unde ipsam cum voluptate nesciunt maiores saepe aut provident! Quo consequuntur, dolorem aliquam aut quisquam tempora molestiae reiciendis, natus iusto distinctio eaque tenetur dicta sit asperiores nulla placeat saepe modi voluptates corrupti vero?
        </p>
      </div>
    </div>
  )
}

export default Blogpost