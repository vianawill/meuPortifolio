/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * Custom Modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='Sobre Mim'
        title='Complexidade transformada em simplicidade'
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Sou um desenvolvedor Front-end e estudante dedicado a transformar
        ideias em experiências digitais fluidas. Atualmente, estou focado em
        aprimorar minhas habilidades em React e TypeScript. Acredito que o
        aprendizado contínuo é a chave na área de tecnologia e busco
        constantemente aplicar as melhores práticas de UX/UI para criar
        interfaces que sejam não apenas bonitas, mas funcionais e acessíveis.
      </motion.p>

      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>Fale Comigo</Button>
      </motion.div>
    </motion.section>
  );
};
