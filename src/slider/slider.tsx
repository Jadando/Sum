import './slider.css';
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
// imagens
import { imgDesk1, imgDesk2, imgDesk3, imgDesk4 } from '../assets/img_desktop/imgDesk';
import { imgMobi1, imgMobi2, imgMobi3, imgMobi4 } from '../assets/img_mobile/imgMobile';


function slider() {
    // Verifica se o objeto window está disponível (por exemplo, se está rodando em um navegador)
    if (typeof window !== 'undefined') {
        // Obtém a largura e altura da tela
        const screenWidth = window.innerWidth;

        // Agora você pode fazer qualquer verificação ou lógica com base no tamanho da tela
        if (screenWidth >= 1025) {
            const data = [
                { id: '1', image: imgDesk3 },
                { id: '2', image: imgDesk2 },
                { id: '3', image: imgDesk1 },
                { id: '4', image: imgDesk4 },
            ]
            return (
                <>
                    <Swiper
                        modules={[EffectFade]}
                        effect='fade'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} >
                                <img id='slider'
                                    src={item.image}
                                    alt='Slider'
                                    className='slider-item'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )
        }
        else if(screenWidth >= 601){
            const data = [
                { id: '1', image: imgMobi2 },
                { id: '2', image: imgMobi3 },
                { id: '3', image: imgMobi4 },
                { id: '4', image: imgMobi1 },
            ]
            return (
                <>
                    <Swiper
                        modules={[EffectFade]}
                        effect='fade'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} >
                                <img
                                    src={item.image}
                                    alt='Slider'
                                    className='slider-item'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )
        }
        else {
            const data = [
                { id: '1', image: imgMobi2 },
                { id: '2', image: imgMobi3 },
                { id: '3', image: imgMobi4 },
                { id: '4', image: imgMobi1 },
            ]
            return (
                <>
                    <Swiper
                        modules={[EffectFade]}
                        effect='fade'
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} >
                                <img
                                    src={item.image}
                                    alt='Slider'
                                    className='slider-item'
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )
        }
    } else {
        console.log('Objeto window não disponível (não está rodando em um navegador).');
    }

}

export default slider