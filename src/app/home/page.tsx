import { ArrowButton } from '@/components/Buttons'
import Navbar from '@/components/Navbar'
import React from 'react'
import { ParticlesPro } from '../../components/ParticlesPro'
import { Logo, LogoBlack, LogoOrange, SupportIcon } from '@/components/Icons'
import Bg from "../../../public/assets/cyborg-hand.png"
import { FaChevronRight } from 'react-icons/fa'
import Footer from '@/components/Footer'

const page = () => {
    return (
        <main className='bg-gray-100 min-h-screen  text-black pt-4 '>
          <header className='w-full px-4'>
            <Navbar/>

            <section className='mt-[100px] h-[calc(100dvh-140px)] flex flex-row gap-4'>
              <div className="flex flex-col w-[33%] h-full gap-4 ">
                <div className="w-full h-full bg-white px-8 py-12 text-left flex flex-col items-start  justify-between rounded-xl">
                  <h2 className='text-[2.75rem] leading-[2.75rem] font-Vietnam tracking-tighter'>
                    Exploring Synergies.<br/> Bridging <span className='text-accent'>AI</span> and the <span className='text-accent'>Real World</span>
                  </h2>

                  <ul className='fw-full max-w-[260px] flex flex-col gap-4 list-disc text-sm text-gray-400 font-Roboto'>
                    <li>Lowering the barrier to leverage bittensor products</li>
                    <li>Aiming for long term sustainability of the ecosystem</li>
                    <li>Loyal to bittensor ethos</li>
                  </ul>
                </div>

                <ArrowButton className='bg-accent w-full h-[120px] rounded-xl text-white' type='right' arrowColor='white'>
                  <span>&lt;/&gt; btcli stake ...</span>
                </ArrowButton>
                <ArrowButton className=' w-full h-[120px] rounded-xl bg-grey' type='right'>
                  <span>Delegate</span>
                </ArrowButton>
              </div>

              <div className=" w-[67%] h-full bg-white rounded-xl">
                <ParticlesPro />
              </div>


            </section>

          </header>

          <div className='m-4 h-[140px] flex flex-row items-center justify-between gap-4'>
            <div className="w-full h-full px-8 text-2xl bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6'>Total<br/> Stake:</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈$109053923.73</p>
              </div>
            </div>

            <div className="w-full h-full px-8 text-2xl bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6'>Daily<br/>Reward</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈$109053923.73</p>
              </div>
            </div>

            <div className="w-full h-full px-8 text-2xl bg-white rounded-xl flex flex-row items-center justify-between">
              <h2 className='text-accent font-Vietnam-semibold font-semibold leading-6'>Daily Validator<br/> Reward</h2>
              <div className="flex flex-col text-right gap-1 font-Roboto font-semibold text-lg ">
                <p>396838.17</p>
                <p className='text-gray-400'>≈$109053923.73</p>
              </div>
            </div>

          </div>
t
          <article className='sticky z-10 top-0 left-0  h-screen  px-4'>
            <div className="bg-white w-full h-full text-5xl text-center flex flex-col items-center justify-center gap-10 rounded-xl">
              <LogoBlack  />

              <p className='w-full max-w-[920px] font-Vietnam-medium text-gray-300'>
                <span className="text-accent">Synergy.ai</span> <span className="text-black">is your opportunity</span> to immerse yourself in the world of decentralized innovation. 
                We offer products taht combine AI and real-world capabilities, bringing the cost down and the efficiency up.
              </p>
            </div>


          </article>

          <section className='relative z-20 h-[120dvh] bg-white px-8 py-10 border-t-[2px] border-gray-100 '
            style={{backgroundImage: `url(${Bg.src})`, backgroundSize: 'cover', backgroundPosition: '10% 80%'}}
          >
            
            <div className="relative w-full py-[150px] border-t-2 border-black flex flex-col  items-end justify-end ">
             <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"> <span className="w-2 h-2 bg-accent rounded-full"></span> company's mission</div>

              <div className="flex flex-col gap-16 w-full max-w-[350px] md:mr-[10%]">
                <h2 className='text-black font-Vietnam-medium text-4xl leading-10'>
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

          <section className='relative z-20 h-[120dvh] bg-white px-8 pt-16 '>            
            <div className="relative w-full h-full py-[110px] border-t-2 border-black">
              <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"><span className="w-2 h-2 bg-accent rounded-full"></span>our products</div>
                
              <div className="w-full h-full flex flex-row gap-8">
                <div className="w-full min-w-[680px] h-full grid grid-cols-2 gap-4 font-Roboto">
                  <aside className='.w-full h-full p-4 bg-black flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-end  justify-between">
                      <p className='text-white max-w-[100px]'>Validator As A Service</p>
                      <FaChevronRight color={'white'} size={15} />
                    </div>
                  </aside>

                  <aside className='.w-full h-full p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                  <aside className='.w-full h-full p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                  <aside className='.w-full h-full p-4 bg-grey flex items-end justify-end rounded-xl'>
                    <div className="w-full flex items-center justify-between">
                      <p className='text-gray-500'>Soon...</p>
                      <FaChevronRight color={'#949494'} size={15} />
                    </div>
                  </aside>

                </div>

                <div className="relative w-full  h-full rounded-xl bg-accent overflow-hidden px-[10dvw] py-[7.5dvw]">
                  <LogoOrange className='absolute z-10 -top-10 right-0 scale-125' />

                  <section className='h-full relative z-20 flex flex-col items-center justify-between'>
                    <h2 className="text-white text-4xl text-center font-Vietnam-medium leading-[1.26em]">
                      Don’t find what you are looking for?
                    </h2>

                    <p className="text-gray-100 font-Roboto text-sm text-center max-w-[300px] mb-8">
                      Get in touch with us to help you deliver a more powerful product leveraging bittensor subnets
                    </p>

                    <div className="flex flex-col w-full gap-4 ">
                      <input type="text" name="" id="" 
                        className="h-70 bg-transparent  rounded-xl outline-none border-2 border-gray-100 p-4 font-Roboto placeholder:text-white" 
                        placeholder='E-Mail'
                      />

                      <ArrowButton className='w-full h-[70px] rounded-xl bg-white text-[black !important]' type='right' arrowColor='black'>
                        Get in touch
                      </ArrowButton>
                    </div>




                  </section>

                </div>

              </div>
            </div>
          </section>

          <section className='relative z-30 min-h-[100dvh] h-max bg-white px-8 py-10 border-t-[2px] border-gray-100'>
            <div className="relative w-full h-full py-[110px] border-t-2 border-black">
              <div className="absolute top-4 left-0 flex flex-row items-center gap-3 font-Roboto font-semibold"><span className="w-2 h-2 bg-accent rounded-full"></span>our benefits</div>
              
              <div className="sticky top-0 h-[80dvh] z-[35] flex items-center justify-center">
                <p className='font-Vietnam-medium leading-[1.28em] text-5xl text-center'>What advantages <br/>do we have?</p>
              </div>

              <div className="relative z-[39] w-full h-full translate-y-[-40%] flex flex-col gap-8">

                <div className="w-full px-[12.5%] flex flex-row items-center justify-between h-[80dvh]">
                  <section className="w-[250px] h-max p-4 py-8 flex flex-col gap-4  place-self-start bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SupportIcon />
                      <h2 className="font-Vietnam-medium text-xl text-black">Custom<br/>Support</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests.
                      </p>
                    </aside>
                  </section>

                  <section className="w-[250px] h-max p-4 py-8 flex flex-col gap-4  place-self-end bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SupportIcon />
                      <h2 className="font-Vietnam-medium text-xl text-black">Custom<br/>Support</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests.
                      </p>
                    </aside>
                  </section>
                </div>

                <div className="w-full px-[12.5%] flex flex-row items-center justify-between h-[80dvh]">
                  <section className="w-[250px] h-max p-4 py-8 flex flex-col gap-4  place-self-start bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SupportIcon />
                      <h2 className="font-Vietnam-medium text-xl text-black">Custom<br/>Support</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests.
                      </p>
                    </aside>
                  </section>

                  <section className="w-[250px] h-max p-4 py-8 flex flex-col gap-4  place-self-end bg-mild_orange rounded-xl">
                    <aside className='flex flex-col gap-6'>
                      <SupportIcon />
                      <h2 className="font-Vietnam-medium text-xl text-black">Custom<br/>Support</h2>
                    </aside>

                    <aside className="border-t border-black py-4">
                      <p className="font-Roboto text-sm">
                        You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests.
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