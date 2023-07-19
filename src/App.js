import './App.css';
import Layout from './components/Layout';
import './stylesheet/main.scss';
import Container from './components/Container';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';
import content from './piecesContent';


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


function App() {

  const slideinleft = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -600,

      },
      {
        opacity: 1,
        x: -100,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          stsart: "top, center ",
          end: "bottom, center ",
        }

      }
    )
  }

  const slideinRigth = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 600,

      },
      {
        opacity: 1,
        x: 100,
        delay: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: elem,
          stsart: "top, center ",
          end: "bottom, center ",
        }

      }
    )
  }

  useEffect(() => {
    slideinleft("#wrap-1")
  }, [])
  useEffect(() => {
    slideinRigth("#wrap-2")
  }, [])
  useEffect(() => {
    slideinleft("#wrap-3")
  }, [])



  return (
    <Layout isHome={true}>
      <div id="wrap-1" className="wrapper">
        <Container content={content.puzzle_1} />
      </div>
      <div id="wrap-2" className="wrapper">
        <Container content={content.puzzle_2} />
      </div>
      <div id="wrap-3" className="wrapper">
        <Container content={content.puzzle_1} />
      </div>
    </Layout>
  );
}

export default App;

 // const [isDispersed, setIsDispersed] = useState(false);
  // const dispatch = useDispatch();

  // const disperseElements = () => {
  //   const wrapper = document.querySelector('.wrapper');
  //   const wrapperRect = wrapper.getBoundingClientRect();
  //   const boundaryOffset = Math.min(wrapperRect.width, wrapperRect.height) * 0.20;

  //   const pieces = document.querySelectorAll('.pieces');
  //   const positions = [];

  //   pieces.forEach(piece => {
  //     let initPos = piece.getBoundingClientRect();
  //     let top, left;
  //     let isValidPosition = false;

  //     while (!isValidPosition) {
  //       top = Math.random() * (wrapperRect.height - 2 * boundaryOffset) + boundaryOffset - piece.offsetHeight / 2;
  //       left = Math.random() * (wrapperRect.width - 2 * boundaryOffset) + boundaryOffset - piece.offsetWidth / 2;

  //       isValidPosition = positions.every(position => {
  //         const distanceX = Math.abs(left - position.left);
  //         const distanceY = Math.abs(top - position.top);
  //         const minDistance = Math.max(wrapperRect.width, wrapperRect.height) * 0.10;

  //         return distanceX > minDistance || distanceY > minDistance;
  //       });
  //     }
  //     positions.push({ top, left });
  //     piece.classList.add('dispersed');
  //   });

  //   pieces.forEach((piece, index) => {
  //     const { top, left } = positions[index];
  //     const randomRotation = Math.floor(Math.random() * 360);
  //     const randomTranslateX = Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2;
  //     const randomTranslateY = Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2;
  //     const currentTop = parseFloat(getComputedStyle(piece).top);
  //     const currentLeft = parseFloat(getComputedStyle(piece).left);
  //     const translateX = left - currentLeft;
  //     const translateY = top - currentTop;

  //     setTimeout(() => {
  //       piece.style.top = `${top}px`;
  //       piece.style.left = `${left}px`;
  //       piece.animate(
  //         [
  //           { transform: 'rotate(0deg) translate(0px, 0px)' },
  //           { transform: `rotate(${randomRotation}deg) translate(${randomTranslateX}px, ${randomTranslateY}px)` },
  //         ],
  //         {
  //           duration: 2500,
  //           easing: 'ease',
  //         }
  //       );
  //     }, 50);
  //   });
  // };