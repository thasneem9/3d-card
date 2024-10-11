import React from 'react';
import LogoImg from '../img/logo.svg';
import Nike1 from '../img/nike.png';
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  return (
    <div style={{ perspective: 2000 }}>
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[100%] sm:w-[426px] min-h-[500px] sm:min-h-[600px] bg-[#e4dfdc] rounded-[20px] sm:rounded-[30px] border-[4px] border-white p-[20px] sm:px-[40px] sm:py-[24px] cursor-grab relative'
      >
        <div className='mb-4 sm:mb-6'>
          <img src={LogoImg} alt='Logo' />
        </div>

        <h1 className='text-3xl sm:text-5xl mb-4 sm:mb-6 font-extrabold'>
          Nike Air Max Pre-Day
        </h1>

        <p className='max-w-[250px] sm:max-w-[300px] text-[#000000] mb-4 sm:mb-6'>
          Taking the classic look of heritage Nike Running into
          new realm, the Nike Air Max Pre-Day brings you a fast-paced look
          that's ready for
        </p>

        <div className='flex items-center gap-x-[10px] sm:gap-x-[20px] mb-8 sm:mb-12'>
          <button className='bg-[#2d2b2c] text-white text-sm sm:text-base font-medium py-[12px] sm:py-[16px] px-[30px] sm:px-[40px] rounded-lg'>
            Add to Bag
          </button>
          <div className='text-[20px] sm:text-[24px] font-bold text-[#000000]'>
            ₹3752.00
          </div>
        </div>

        <div>
          <ul className='flex gap-[8px] sm:gap-[10px]'>
            {colors.map((color, index) => (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className='w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer'
              ></li>
            ))}
          </ul>
        </div>

        <motion.div
          style={{ x, y, rotateX, rotateY, z: 10000 }}
          className='absolute top-10 sm:top-12 -right-44 sm:-right-64 w-[480px] sm:w-[620px]'
        >
          <img src={Nike1} alt='Nike' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
