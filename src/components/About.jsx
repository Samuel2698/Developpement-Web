import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold text-pink-600'>
                A propos de moi
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p className='lg:px-14 text-justify'>Rigueureux, passioné et avec l'esprit d'équipe. Ce sont les mots qui me décrivent le mieux comme développeur.</p>
              </div>
              <div>
                <p className='text-justify'>
                Né à Caracas au Venezuela, j'ai dû partir de mon pays à cause de sa mauvaise situation économique et politique. En France, pendant que je cherchais ma voix professionnelle, j'ai essayé pour la première fois HTML et, à partir de ce moment-là, je suis tombé amoureux de ce domaine. Maintenant, je souhaite acquérir mes premières expériences dans le marché du travail en tant que développeur web front-end, tout en m'améliorant chaque jour mes compétences techniques.
                </p>
              </div>
            </div>
        </div>
      </div>
  )
}

export default About

