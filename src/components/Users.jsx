import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { usersList } from '../data/users-data';
import '../styles/users.css';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Users() {
    return (
        <div className="users">
            <div className="slide-container">
                <div className="slide-content">
                    <div className="card-wrapper">
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={false}
                            slidesPerGroupSkip={2}
                            grabCursor={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                769: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                            }}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                            className="mySwiper"
                            style={{padding: '40px'}}
                        >
                            {usersList.map(item => (
                                <SwiperSlide key={item.id} style={{width: '350px', margin:'0 3px 0 3px'}}>
                                    <div className="card" style={{borderRadius: '25px'}}>
                                        <div className="image-content">
                                            <span className="image-content__overlay"></span>
                                            <div className="card-image">
                                                <img src={item.image} alt="" className="card-image__user" />
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <h2 className="card-content__name">{item.firstName} {item.lastName}</h2>
                                            <p className="card-content__des">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <button className="card-content__btn">View more</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users