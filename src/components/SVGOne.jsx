import React from 'react'

import ParallaxOctagon from './ParallaxOctagon'
import BorderOctagon from './BorderOctagon'
import colors from '../styles/colors'

export default function SVGOne() {
  return (
    <div
      style={{
        position: 'relative',
        height: '900px',
        width: '1100px',
        left: '-128.43px',
        margin: '0 auto',
        top: '100px',
      }}
    >
      <ParallaxOctagon
        left=" -30px"
        top="450px"
        ratio={2.1}
        zIndex={11}
        speed={2}
        color={colors.LIGHT_GREEN}
      />
      <ParallaxOctagon
        left=" 250px"
        top="1000px"
        ratio={2.3}
        zIndex={12}
        speed={3}
        color={colors.RED}
      />
      <ParallaxOctagon
        left=" 400px"
        top="1300px"
        ratio={1}
        zIndex={8}
        speed={7}
        color={colors.RED}
      />
      <ParallaxOctagon
        left=" 650px"
        top="1000px"
        ratio={0.7}
        zIndex={11}
        speed={6}
        color={colors.DARK_GREEN}
      />
      <ParallaxOctagon
        left=" 350px"
        top="900px"
        ratio={0.9}
        zIndex={19}
        speed={5}
        color={colors.ORANGE}
      />
      <ParallaxOctagon
        left=" 400px"
        top="500px"
        ratio={2.2}
        zIndex={7}
        speed={1}
        color={colors.LIGHT_GRAY100}
        opacity={0.5}
      />
      <ParallaxOctagon
        left=" 380px"
        top="1100px"
        ratio={1.9}
        zIndex={11}
        speed={5}
        color={colors.LIGHT_GRAY100}
        opacity={0.7}
      />
      <ParallaxOctagon
        left=" 600px"
        top="400px"
        ratio={1.1}
        zIndex={6}
        speed={1}
        color={colors.RED}
      />
      <ParallaxOctagon
        left=" 530px"
        top="220px"
        ratio={2.1}
        zIndex={8}
        speed={2}
        color={colors.ORANGE}
      />
      <ParallaxOctagon
        left=" 960px"
        top="700px"
        ratio={1.5}
        zIndex={13}
        speed={7}
        color={colors.LIGHT_GRAY200}
        opacity={0.5}
      />
      <BorderOctagon
        left="850px"
        top="300px"
        ratio={2}
        speed={1}
        zIndex={11}
        color={colors.RED}
      />
      <BorderOctagon
        left="850px"
        top="300px"
        ratio={1.5}
        speed={1}
        zIndex={8}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="730px"
        top="380px"
        ratio={2}
        speed={3}
        zIndex={8}
        color={colors.ORANGE}
      />
      <BorderOctagon
        left="700px"
        top="80px"
        ratio={2.2}
        speed={1}
        zIndex={8}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="700px"
        top="500px"
        ratio={2.4}
        speed={1.5}
        zIndex={8}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="180px"
        top="790px"
        ratio={2.4}
        speed={2}
        zIndex={8}
        color={colors.LIGHT_GREEN}
      />
      <BorderOctagon
        left="330px"
        top="250px"
        ratio={2}
        speed={2}
        zIndex={8}
        color={colors.RED}
      />
      <ParallaxOctagon
        left="930px"
        top="400px"
        ratio={2}
        zIndex={11}
        speed={3}
        color={colors.ORANGE}
      />
      <img
        src="images/svgone/one.png"
        alt="deskovky"
        style={{
          position: 'absolute',
          width: '360.02px',
          height: '312.84px',
          left: '128.43px',
          top: '53.51px',
          zIndex: 7,
        }}
      />
      <img
        src="images/svgone/two.png"
        alt="mse svata"
        style={{
          position: 'absolute',
          width: '457.37px',
          height: '397.07px',
          left: '419.71px',
          top: '181.28px',
          zIndex: 7,
        }}
      />
      <img
        src="images/svgone/three.png"
        alt="kriz"
        style={{
          position: 'absolute',
          width: '204px',
          height: '178px',
          left: '825px',
          top: '130px',
          zIndex: 15,
        }}
      />
      <img
        src="images/svgone/four.png"
        alt="zpevaci"
        style={{
          position: 'absolute',
          width: '490px',
          height: '424px',
          left: '785px',
          top: '379px',
          zIndex: 7,
        }}
      />
      <img
        src="images/svgone/six.png"
        alt="kost"
        style={{
          position: 'absolute',
          width: '351px',
          height: '305px',
          left: '492px',
          top: '608px',
          zIndex: 7,
        }}
      />
      <img
        src="images/svgone/seven.png"
        alt="diskuze"
        style={{
          position: 'absolute',
          width: '347px',
          height: '302px',
          left: '134px',
          top: '394px',
          zIndex: 20,
        }}
      />
    </div>
  )
}
