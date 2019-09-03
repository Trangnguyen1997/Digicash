import React, { Component } from "react";
import about1 from "assets/img/about-1.png";
import about2 from "assets/img/about-2.png";
import about3 from "assets/img/about-3.png";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: `${about1}`,
    altText: "Slide 1",
    caption: "Họp báo ra mắt ứng dụng"
  },
  {
    src: `${about2}`,
    altText: "Slide 2",
    caption: "Họp báo ra mắt ứng dụng"
  },
  {
    src: `${about3}`,
    altText: "Slide 3",
    caption: "Họp báo ra mắt ứng dụng"
  }
];

class GioiThieu extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text-danger"
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
    return (
      <div className="gioithieu-container">
        <div className="gioithieu-content">
          <h1 className="gioithieu-content__title">Giới thiệu về Digi Cash</h1>

          <div className="gioithieu-content-line">
            <hr></hr>
          </div>

          <div className="gioithieu-content__buttons">
            <div className="gioithieu-buttons__items">
              <button className="gioithieu-buttons__item">ĐƠN GIẢN</button>
              <button className="gioithieu-buttons__item">NHANH CHÓNG</button>
              <button className="gioithieu-buttons__item">TIN CẬY</button>
            </div>
          </div>

          <div className="gioithieu-content__info">
            <div className="gioithieu-info__item">
              <div className="gioithieu-info__number">24</div>
              <div className="gioithieu-info__text">
                Duyệt nhanh trong 24 giờ
              </div>
            </div>
            <div className="gioithieu-info__item">
              <div className="gioithieu-info__number">90034</div>

              <div className="gioithieu-info__text">
                Người sử dụng và hài lòng
              </div>
            </div>
            <div className="gioithieu-info__item">
              <div className="gioithieu-info__number">90</div>
              <div className="gioithieu-info__text">Kỳ hạn đến 90 ngày</div>
            </div>
          </div>

          <div className="gioithieu-content__images">
            <div className="gioithieu-images__item">
              <div
                style={{ backgroundImage: `url(${about1})` }}
                className="gioithieu-images__img"
              ></div>
              <p className="gioithieu-images__text">
                Maecenas imperdiet nunc eu auctor vestibulum. Phasellus vehicula
                eu odio et laoreet. Suspendisse elementum placerat rutrum. Sed
                blandit augue sit amet erat scelerisque egestas. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit a
                dui nec tincidunt. Sed vitae lacus vitae dolor maximus volutpat.
              </p>
            </div>
          </div>

          <div className="gioithieu-content__carousel">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </Carousel>

            <p className="gioithieu-carousel__text">
              Maecenas imperdiet nunc eu auctor vestibulum. Phasellus vehicula
              eu odio et laoreet. Suspendisse elementum placerat rutrum. Sed
              blandit augue sit amet erat scelerisque egestas. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Vivamus hendrerit a dui nec
              tincidunt. Sed vitae lacus vitae dolor maximus volutpat.
            </p>
          </div>

          <div className="gioithieu-content__images">
            <div className="gioithieu-images__item">
              <div
                style={{ backgroundImage: `url(${about3})` }}
                className="gioithieu-images__img"
              ></div>
              <p className="gioithieu-images__text">
                Maecenas imperdiet nunc eu auctor vestibulum. Phasellus vehicula
                eu odio et laoreet. Suspendisse elementum placerat rutrum. Sed
                blandit augue sit amet erat scelerisque egestas. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit a
                dui nec tincidunt. Sed vitae lacus vitae dolor maximus volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GioiThieu;
GioiThieu.propTypes = {};
GioiThieu.defaultProps = {};
