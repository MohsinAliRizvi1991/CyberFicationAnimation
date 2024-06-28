// document.addEventListener("DOMContentLoaded", function() {
//     // Create and append <meta> tags
//     const metaCharset = document.createElement('meta');
//     metaCharset.setAttribute('charset', 'UTF-8');
//     document.head.appendChild(metaCharset);

//     const metaIE = document.createElement('meta');
//     metaIE.setAttribute('http-equiv', 'X-UA-Compatible');
//     metaIE.setAttribute('content', 'IE=edge');
//     document.head.appendChild(metaIE);

//     const metaViewport = document.createElement('meta');
//     metaViewport.setAttribute('name', 'viewport');
//     metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
//     document.head.appendChild(metaViewport);

//     // Create and append <title> tag
//     const title = document.createElement('title');
//     title.textContent = 'Document';
//     document.head.appendChild(title);

//     // Create and append CSS link tags
//     const linkLocalCSS = document.createElement('link');
//     linkLocalCSS.setAttribute('rel', 'stylesheet');
//     linkLocalCSS.setAttribute('href', 'style.css');
//     document.head.appendChild(linkLocalCSS);

//     const linkLocomotiveCSS = document.createElement('link');
//     linkLocomotiveCSS.setAttribute('rel', 'stylesheet');
//     linkLocomotiveCSS.setAttribute('href', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css');
//     document.head.appendChild(linkLocomotiveCSS);

//     // Create body content
//     const bodyContent = `
//         <div id="nav">
//             <h3><b>CYBER</b>FICTION*</h3>
//             <button>APRIL,2023</button>
//         </div>
//         <div id="main">
//             <div id="page">
//                 <div id="loop">
//                     <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
//                     <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
//                     <h1><b>CYBER</b>FICTION IS THE <b><i>REAL</i></b> <span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
//                 </div>
//                 <h3>CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN <br> CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL <br> WORLD.</h3>
//                 <h4>...SCROLL TO READ</h4>
//                 <canvas></canvas>
//             </div>
//             <div id="page1">
//                 <div id="right-text">
//                     <h3>CYBERFICTION / KEY WORD</h3>
//                     <h1>HAVE FUN
//                         <br>
//                         LET'S PLAY
//                         <br>
//                         JUST BE TOGETHER</h1>
//                 </div>
//                 <div id="left-text">
//                     <h1>MAKE A STORY
//                         <br>
//                         TAKE A CHANCE
//                         <br>
//                         BUILD AND OWNED</h1>
//                     <h3>..AND MAINTAIN GOOD HUMANITY</h3>
//                 </div>
//             </div>
//             <div id="page2">
//                 <div id="text1">
//                     <h3>CYBERFICTION / HAVE FUN</h3>
//                     <h1>LET'S
//                         <br>
//                         HAVE FUN
//                         <br>
//                         TOGETHER</h1>
//                 </div>
//                 <div id="text2">
//                     <p>LET'S HAVE A BLAST! LET'S JUST THROW AWAY AGE, GENDER, REGION, <br> STATUS, ETC., DON'T COMPETE, DON'T FIGHT, COOPERATE AND SHARE <br> WITH EACH OTHER AND ENJOY IT TOGETHER! SO THAT YOU CAN STAND <br> THERE IN THE NOT-TOO-DISTANT FUTURE AND DREAM OF ANOTHER NEW <br> FUTURE</p>
//                 </div>
//             </div>
//             <div id="page3">
//                 <div id="text3">
//                     <h3>CYBERFICTION / PLAYGROUND</h3>
//                     <h1>
// CYBERFIELD
// <br>
// IS OUR
// <br>
// PLAYGROUND
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     `;

//     // Set body content
//     document.body.innerHTML = bodyContent;

//     // Create and append script tags
//     const scriptLocomotive = document.createElement('script');
//     scriptLocomotive.setAttribute('src', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js');
//     document.body.appendChild(scriptLocomotive);

//     const scriptGSAP = document.createElement('script');
//     scriptGSAP.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js');
//     scriptGSAP.setAttribute('integrity', 'sha512-cOH8ndwGgPo+K7pTvMrqYbmI8u8k6Sho3js0gOqVWTmQMlLIi6TbqGWRTpf1ga8ci9H3iPsvDLr4X7xwhC/+DQ==');
//     scriptGSAP.setAttribute('crossorigin', 'anonymous');
//     scriptGSAP.setAttribute('referrerpolicy', 'no-referrer');
//     document.body.appendChild(scriptGSAP);

//     const scriptScrollTrigger = document.createElement('script');
//     scriptScrollTrigger.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js');
//     scriptScrollTrigger.setAttribute('integrity', 'sha512-AMl4wfwAmDM1lsQvVBBRHYENn1FR8cfOTpt8QVbb/P55mYOdahHD4LmHM1W55pNe3j/3od8ELzPf/8eNkkjISQ==');
//     scriptScrollTrigger.setAttribute('crossorigin', 'anonymous');
//     scriptScrollTrigger.setAttribute('referrerpolicy', 'no-referrer');
//     document.body.appendChild(scriptScrollTrigger);

//     // Add the inline script for locomotive and canvas animation
//     const scriptInline = document.createElement('script');
//     scriptInline.textContent = `
//     function locomotive() {
//         gsap.registerPlugin(ScrollTrigger);

//         const locoScroll = new LocomotiveScroll({
//             el: document.querySelector("#main"),
//             smooth: true ,
//         });
//         locoScroll.on("scroll", ScrollTrigger.update);

//         ScrollTrigger.scrollerProxy("#main", {
//             scrollTop(value) {
//                 return arguments.length
//                     ? locoScroll.scrollTo(value, 0, 0)
//                     : locoScroll.scroll.instance.scroll.y;
//             },
//             getBoundingClientRect() {
//                 return {
//                     top: 0,
//                     left: 0,
//                     width: window.innerWidth,
//                     height: window.innerHeight,
//                 };
//             },
//             pinType: document.querySelector("#main").style.transform
//                 ? "transform"
//                 : "fixed",
//         });
//         ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//         ScrollTrigger.refresh();
//     }
//     locomotive();

//     const canvas = document.querySelector("canvas");
//     const context = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     window.addEventListener("resize", function () {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         render();
//     });

//     function files(index) {
//         var data = \`
//         ./male0001.png
//         ./male0002.png
//         ./male0003.png
//         ./male0004.png
//         ./male0005.png
//         ./male0006.png
//         ./male0007.png
//         ./male0008.png
//         ./male0009.png
//         ./male0010.png
//         ./male0011.png
//         ./male0012.png
//         ./male0013.png
//         ./male0014.png
//         ./male0015.png
//         ./male0016.png
//         ./male0017.png
//         ./male0018.png
//         ./male0019.png
//         ./male0020.png
//         ./male0021.png
//         ./male0022.png
//         ./male0023.png
//         ./male0024.png
//         ./male0025.png
//         ./male0026.png
//         ./male0027.png
//         ./male0028.png
//         ./male0029.png
//         ./male0030.png
//         ./male0031.png
//         ./male0032.png
//         ./male0033.png
//         ./male0034.png
//         ./male0035.png
//         ./male0036.png
//         ./male0037.png
//         ./male0038.png
//         ./male0039.png
//         ./male0040.png
//         ./male0041.png
//         ./male0042.png
//         ./male0043.png
//         ./male0044.png
//         ./male0045.png
//         ./male0046.png
//         ./male0047.png
//         ./male0048.png
//         ./male0049.png
//         ./male0050.png
//         ./male0051.png
//         ./male0052.png
//         ./male0053.png
//         ./male0054.png
//         ./male0055.png
//         ./male0056.png
//         ./male0057.png
//         ./male0058.png
//         ./male0059.png
//         ./male0060.png
//         ./male0061.png
//         ./male0062.png
//         ./male0063.png
//         ./male0064.png
//         ./male0065.png
//         ./male0066.png
//         ./male0067.png
//         ./male0068.png
//         ./male0069.png
//         ./male0070.png
//         ./male0071.png
//         ./male0072.png
//         ./male0073.png
//         ./male0074.png
//         ./male0075.png
//         ./male0076.png
//         ./male0077.png
//         ./male0078.png
//         ./male0079.png
//         ./male0080.png
//         ./male0081.png
//         ./male0082.png
//         ./male0083.png
//         ./male0084.png
//         ./male0085.png
//         ./male0086.png
//         ./male0087.png
//         ./male0088.png
//         ./male0089.png
//         ./male0090.png
//         ./male0091.png
//         ./male0092.png
//         ./male0093.png
//         ./male0094.png
//         ./male0095.png
//         ./male0096.png
//         ./male0097.png
//         ./male0098.png
//         ./male0099.png
//         ./male0100.png
//         ./male0101.png
//         ./male0102.png
//         ./male0103.png
//         ./male0104.png
//         ./male0105.png
//         ./male0106.png
//         ./male0107.png
//         ./male0108.png
//         ./male0109.png
//         ./male0110.png
//         ./male0111.png
//         ./male0112.png
//         ./male0113.png
//         ./male0114.png
//         ./male0115.png
//         ./male0116.png
//         ./male0117.png
//         ./male0118.png
//         ./male0119.png
//         ./male0120.png
//         ./male0121.png
//         ./male0122.png
//         ./male0123.png
//         ./male0124.png
//         ./male0125.png
//         ./male0126.png
//         ./male0127.png
//         ./male0128.png
//         ./male0129.png
//         ./male0130.png
//         ./male0131.png
//         ./male0132.png
//         ./male0133.png
//         ./male0134.png
//         ./male0135.png
//         ./male0136.png
//         ./male0137.png
//         ./male0138.png
//         ./male0139.png
//         ./male0140.png
//         ./male0141.png
//         ./male0142.png
//         ./male0143.png
//         ./male0144.png
//         ./male0145.png
//         ./male0146.png
//         ./male0147.png
//         ./male0148.png
//         ./male0149.png
//         ./male0150.png
//         ./male0151.png
//         ./male0152.png
//         ./male0153.png
//         ./male0154.png
//         ./male0155.png
//         ./male0156.png
//         ./male0157.png
//         ./male0158.png
//         ./male0159.png
//         ./male0160.png
//         ./male0161.png
//         ./male0162.png
//         ./male0163.png
//         ./male0164.png
//         ./male0165.png
//         ./male0166.png
//         ./male0167.png
//         ./male0168.png
//         ./male0169.png
//         ./male0170.png
//         ./male0171.png
//         ./male0172.png
//         ./male0173.png
//         ./male0174.png
//         ./male0175.png
//         ./male0176.png
//         ./male0177.png
//         ./male0178.png
//         ./male0179.png
//         ./male0180.png
//         ./male0181.png
//         ./male0182.png
//         ./male0183.png
//         ./male0184.png
//         ./male0185.png
//         ./male0186.png
//         ./male0187.png
//         ./male0188.png
//         ./male0189.png
//         ./male0190.png
//         ./male0191.png
//         ./male0192.png
//         ./male0193.png
//         ./male0194.png
//         ./male0195.png
//         ./male0196.png
//         ./male0197.png
//         ./male0198.png
//         ./male0199.png
//         ./male0200.png
//         ./male0201.png
//         \`;
//         return data.split("\\n")[index];
//     }

//     const frameCount = 300;

//     const images = [];
//     const imageSeq = {
//         frame: 1,
//     };

//     for (let i = 0; i < frameCount; i++) {
//         const img = new Image();
//         img.src = files(i);
//         images.push(img);
//     }

//     gsap.to(imageSeq, {
//         frame: frameCount - 1,
//         snap: "frame",
//         ease: \`none\`,
//         scrollTrigger: {
//             scrub: 0.15,
//             trigger: \`#page>canvas\`,
//             start: \`top top\`,
//             end: \`600% top\`,
//             scroller: \`#main\`,
//         },
//         onUpdate: render,
//     });

//     images[1].onload = render;

//     function render() {
//         scaleImage(images[imageSeq.frame], context);
//     }

//     function scaleImage(img, ctx) {
//         var canvas = ctx.canvas;
//         var hRatio = canvas.width / img.width;
//         var vRatio = canvas.height / img.height;
//         var ratio = Math.max(hRatio, vRatio);
//         var centerShift_x = (canvas.width - img.width * ratio) / 2;
//         var centerShift_y = (canvas.height - img.height * ratio) / 2;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(
//             img,
//             0,
//             0,
//             img.width,
//             img.height,
//             centerShift_x,
//             centerShift_y,
//             img.width * ratio,
//             img.height * ratio
//         );
//     }

//     ScrollTrigger.create({
//         trigger: "#page>canvas",
//         pin: true,
//         // markers:true,
//         scroller: \`#main\`,
//         start: \`top top\`,
//         end: \`600% top\`,
//     });

//     gsap.to("#page1",{
//         scrollTrigger:{
//             trigger:\`#page1\`,
//             start:\`top top\`,
//             end:\`bottom top\`,
//             pin:true,
//             scroller:\`#main\`
//         }
//     });

//     gsap.to("#page2",{
//         scrollTrigger:{
//             trigger:\`#page2\`,
//             start:\`top top\`,
//             end:\`bottom top\`,
//             pin:true,
//             scroller:\`#main\`
//         }
//     });

//     gsap.to("#page3",{
//         scrollTrigger:{
//             trigger:\`#page3\`,
//             start:\`top top\`,
//             end:\`bottom top\`,
//             pin:true,
//             scroller:\`#main\`
//         }
//     });
//     `;
//     document.body.appendChild(scriptInline);
// });
