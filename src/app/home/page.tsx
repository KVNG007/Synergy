"use client"

import { ArrowButton } from '@/components/Buttons'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { ParticlesPro } from '../../components/ParticlesPro'
import { FlexibleIcon, Logo, LogoBlack, LogoOrange, SecurityIcon, StableIcon, SupportIcon } from '@/components/Icons'
import Bg from "../../../public/assets/cyborg-hand.png"
import { FaChevronRight } from 'react-icons/fa'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useGetStatsQuery } from '@/features/stats/apiStats'

const page = () => {
  
  const { data, isFetching, isLoading, error } = useGetStatsQuery({}, { refetchOnMountOrArgChange: true });
  
  useEffect(() => {
    console.log(data?.rates);
  }, [data])
  

    return (
        <main className='bg-gray-100 min-h-screen  text-black pt-4 '>
          <header className='w-full px-4'>
            <Navbar/>

            <section className='mt-[100px] h-max md:h-[70dvh] xl:h-[calc(100dvh-140px)] flex flex-col md:flex-row gap-4'>
              <div className="flex flex-col w-full md:w-[33%] h-full gap-4 ">
                <div className="w-full h-full bg-white px-8 py-12 text-left flex flex-col items-start  justify-between gap-6 md:gap-[unset] rounded-xl">
                  <h2 className=' text-[1.8rem] md:text-[2em] xl:text-[2.75rem] leading-8 md:leading-[2.75rem] font-Vietnam tracking-tighter'>
                    Exploring Synergies.<br/> Bridging <span className='text-accent'>AI</span> and the <span className='text-accent'>Real World</span>
                  </h2>

                  <ul className='fw-full max-w-[260px] flex flex-col gap-4 list-disc text-sm text-gray-400 font-Roboto'>
                    <li>Lowering the barrier to leverage bittensor products</li>
                    <li>Aiming for long term sustainability of the ecosystem</li>
                    <li>Loyal to bittensor ethos</li>
                  </ul>
                </div>

                <ArrowButton className='bg-accent w-full h-[70px] md:h-[120px] rounded-xl text-white' type='right' arrowColor='white'>
                  <span>&lt;/&gt; btcli stake ...</span>
                </ArrowButton>
                <ArrowButton className=' w-full h-[70px] md:h-[120px] rounded-xl bg-grey' type='right'>
                  <span>Delegate</span>
                </ArrowButton>
              </div>

              <div className="w-full  md:w-[67%] h-60 md:h-full bg-white rounded-xl">
                <ParticlesPro />
              </div>


            </section>

          </header>

          <div className='m-4 h-[400px]  md:h-[140px] text-xl md:text-2xl flex flex-col md:flex-row items-center justify-between gap-4'>
            <div className="w-full h-full px-8  bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6 text-sm xl:text-lg'>Total<br/> Stake:</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-base xl:text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈${data?.rates?.BTC || '...'}</p>
              </div>
            </div>

            <div className="w-full h-full px-8  bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6 text-sm xl:text-lg'>Daily<br/>Reward</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-base xl:text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈${data?.rates?.ETH || '...'}</p>
              </div>
            </div>

            <div className="w-full h-full px-8  bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6 text-sm xl:text-lg'>Daily Validator<br/> Reward</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-base xl:text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈${data?.rates?.SOL || '...'}</p>
              </div>
            </div>

          </div>

          <article className='sticky z-10 top-0 left-0 h-screen  px-4'>
            <div className="bg-white w-full h-full text-2xl md:text-5xl text-center flex flex-col items-center justify-center gap-10 rounded-xl">
              <LogoBlack  />

              <p className='w-full max-w-[920px] font-Vietnam-regular md:font-Vietnam-medium text-gray-300'>
                <span className="text-accent">Synergy.ai</span> <span className="text-black">is your opportunity</span> to immerse yourself in the world of decentralized innovation. 
                We offer products taht combine AI and real-world capabilities, bringing the cost down and the efficiency up.
              </p>
            </div>


          </article>


          <section className='relative z-[25] h-[150dvh] md:h-[120dvh] bg-white px-8 py-10 border-t-[2px] border-gray-100 hidden md:block '
            style={{backgroundImage: `url(${Bg.src})`, backgroundSize: 'cover', backgroundPosition: '10% 80%'}}
          >
            <div className="relative w-full py-[120px] md:py-[150px] border-t-2 border-black flex flex-col  items-end justify-end ">
              <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"> <span className="w-2 h-2 bg-accent rounded-full"></span> company's mission</div>

              <div className="flex flex-col gap-16 w-full md:max-w-[350px] md:mr-[10%]">
                <h2 className='w-full max-w-[300px] md:max-w-full text-black font-Vietnam-medium text-3xl md:text-4xl leading-10'>
                  We create synergy between AI and the real world
                </h2>

                <article className='w-full flex flex-col gap-10 font-Roboto text-black text-sm font-semibold'>
                  <p className="text-left max-w-[300px]">
                    providing you with affordable tools to integrate technological innovation into your life
                  </p>

                  <p className="text-right max-w-[250px] self-end">
                    developing decentralized solutions that ensure sustainable development of the ecosystem and maximum efficiency.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className='relative z-[25] h-[150dvh] md:h-[120dvh] bg-white px-8 py-10 border-t-[2px] border-gray-100 block md:hidden '>
            <div className="relative w-full py-[120px] md:py-[150px] border-t-2 border-black flex flex-col  items-end justify-end ">
              <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"> <span className="w-2 h-2 bg-accent rounded-full"></span> company's mission</div>

              <div className="flex flex-col gap-16 w-full md:max-w-[350px] md:mr-[10%]">
                <h2 className='w-full max-w-[300px] md:max-w-full text-black font-Vietnam-medium text-3xl md:text-4xl leading-10'>
                  We create synergy between AI and the real world
                </h2>

                <article className='w-full flex flex-col gap-10 font-Roboto text-black text-sm font-semibold'>
                  <p className="text-left max-w-[300px]">
                    providing you with affordable tools to integrate technological innovation into your life
                  </p>

                  <p className="text-right max-w-[250px] self-end">
                    developing decentralized solutions that ensure sustainable development of the ecosystem and maximum efficiency.
                  </p>
                  
                  <Image alt='Synergy' width={120} height={300} src={`/assets/cyborg-hand-finger.png`} className="w-full  translate-y-[-75px]" />
                </article>

              </div>
            </div>
          </section>


          <section className='relative z-20 h-max md:h-[80dvh] lg:h-[860px] xl:h-[120dvh] bg-white px-8 pt-16 '>            
            <div className="relative w-full h-full py-[110px] border-t-2 border-black">
              <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"><span className="w-2 h-2 bg-accent rounded-full"></span>our products</div>
                
              <div className="w-full h-full flex flex-col md:flex-row gap-8 ">
                <div className="h-full w-full md:min-w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-Roboto ">
                  <aside className='w-full min-h-[150px] h-full md:min-h-[100%] p-4 bg-black flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-end  justify-between">
                      <p className='text-white max-w-[100px] '>Validator As A Service</p>
                      <FaChevronRight color={'white'} size={15} />
                    </div>
                  </aside>

                  <aside className='w-full h-full min-h-[150px] md:min-h-[100%] p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                  <aside className='w-full h-full min-h-[150px] md:min-h-[100%] p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                  <aside className='w-full h-full min-h-[150px] md:min-h-[100%] p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                </div>

                <div className="relative w-full  h-full rounded-xl bg-accent overflow-hidden px-[10dvw] py-[60px] md:py-[7.5dvw]">
                  <LogoOrange className='absolute z-10  -top-16 md:-top-10 -right-[70%] md:right-0 scale-75 md:scale-125' />

                  <section className='h-full relative z-20 flex flex-col items-center justify-between gap-4 md:gap-[unset]'>
                    <h2 className="text-white text-xl md:text-4xl text-center font-Vietnam-medium leading-[1.26em]">
                      Don’t find what you are looking for?
                    </h2>

                    <p className="text-gray-100 font-Roboto text-sm text-center max-w-[300px] mb-8">
                      Get in touch with us to help you deliver a more powerful product leveraging bittensor subnets
                    </p>

                    <div className="flex flex-col w-full gap-4 ">
                      <input type="text" name="" id="" 
                        className=" h-[50px] md:h-70 bg-transparent  rounded-xl outline-none border-2 border-gray-100 p-4 font-Roboto placeholder:text-white" 
                        placeholder='E-Mail'
                      />

                      <ArrowButton className='w-full h-[60px] md:h-[70px] rounded-xl bg-white text-[black !important]' type='right' arrowColor='black'>
                        Get in touch
                      </ArrowButton>
                    </div>




                  </section>

                </div>

              </div>
            </div>
          </section>

          <section className='relative z-30 min-h-[100dvh] h-max bg-white px-8 py-10 border-t-[2px] border-gray-100'>
            <div className="relative w-full h-full md:py-[110px] md:border-t-2 md:border-black">
              <div className="hidden absolute top-4 left-0 md:flex flex-row items-center gap-3 font-Roboto font-semibold"><span className="w-2 h-2 bg-accent rounded-full"></span>our benefits</div>
              
              <div className="sticky top-0 h-[80dvh] z-[35] flex items-center justify-start md:justify-center">
                <div className="absolute w-full top-10 left-0 pt-4 flex md:hidden flex-row items-center gap-3 font-Roboto font-semibold border-t-2 border-black">
                  <span className=" w-2 h-2 bg-accent rounded-full"></span>our benefits
                </div>
                
                <p className='max-w-[180px] md:max-w-max font-Vietnam-medium leading-[1.28em] text-3xl md:text-5xl text-left md:text-center'>What advantages <br/>do we have?</p>
              </div>

              <div className="relative z-[39] w-full h-full md:translate-y-[-35%] flex flex-col gap-10 md:gap-8">

                <div className="w-full md:px-[12.5%] flex flex-col md:flex-row items-end md:items-center justify-between gap-10 md:gap-0 h-max md:h-[80dvh]">
                  <section className="w-[220px] md:w-[250px] h-max p-4 py-8 flex flex-col gap-4  md:place-self-start bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SupportIcon className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                      <h2 className="font-Vietnam-medium text-xl text-black">Custom<br/>Support</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests.
                      </p>
                    </aside>
                  </section>

                  <section className="w-[220px] md:w-[250px] h-max p-4 py-8 flex flex-col gap-4  md:place-self-end bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <FlexibleIcon className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                      <h2 className="font-Vietnam-medium text-xl text-black">Flexible<br/>Solutions</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        Choose from various access tiers to manage your validators and subnets according to your specific needs and staking volumes.
                      </p>
                    </aside>
                  </section>
                </div>

                <div className="w-full md:px-[12.5%] flex flex-col md:flex-row items-end md:items-center justify-between gap-10 md:gap-0 h-max md:h-[80dvh]">
                  <section className="w-[220px] md:w-[250px] h-max p-4 py-8 flex flex-col gap-4  md:place-self-start bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SecurityIcon className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                      <h2 className="font-Vietnam-medium text-xl text-black">Robust<br/>Security</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        Rely on continuous monitoring and system optimization from our experienced team, ensuring 24/7 protection.
                      </p>
                    </aside>
                  </section>

                  <section className="w-[220px] md:w-[250px] h-max p-4 py-8 flex flex-col gap-4  md:place-self-end bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <StableIcon className='w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
                      <h2 className="font-Vietnam-semibold text-xl text-black">Stable<br/>Infrastructure</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        Experience efficient, fast, and accurate data processing across all your subnets with our high-performance hardware.
                      </p>
                    </aside>
                  </section>
                </div>

              </div>
            </div>
          </section>

          <Footer />
        </main>
    )
}

export default page