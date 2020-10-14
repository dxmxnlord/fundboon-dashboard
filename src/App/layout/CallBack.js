// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import 'aos/dist/aos.css';
// import { useClient } from '../../client';
// import Service from '../../assets/img/callback.jpg';
// import classNames from 'classnames';
// import { ADD_CALLBACKREQUEST_MUTATION } from '../../graphql/mutation';
// import fundboonLogo from '../../assets/img/fundboon-logo-full.png';
// const CallBack = () => {
//   const client = useClient();
//   const [status, setStatus] = useState('primary');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email,setEmail]=useState('');
//   const [submitting, setSubmitting] = useState(false);
//   const Addhandle = async e => {
//     try {
//       e.preventDefault();
//       setSubmitting(true);
  
//       const variable = { name, mobile,email};
//       const { add } = await client.request(
//         ADD_CALLBACKREQUEST_MUTATION,
//         variable
//       );

//       console.log(add);
//       Swal.fire({
//         imageUrl:fundboonLogo,
//         imageWidth: "150px",
//         imageHeight:"50px",
//         html:'<b>Thank you.<br> Our service executive will be in touch with you shortly.</b>',
//         type: 'success',
//         confirmButtonText: 'OK'
//       });
//       setSubmitting(false);
//       setName("");
//       setMobile("");
//       setEmail("");
//     } catch (err) {
//       Swal.fire({
//         imageUrl:fundboonLogo,
//           imageWidth: "150px",
//           imageHeight:"50px",
//         title: 'Oops...',
//         //type: 'error',
//         confirmButtonText: 'OK'
//       });
//       setStatus('danger');
//       setSubmitting(false);
//       console.error({ err });
//     }

//     //reset to blank
//     setEmail('');
//     setName('');
//     setMobile('');
//   };

//   return (
//     <section className="my-4">
//       <div className="container">
//         <div className="row align-items-center">
//           <div
//             className="col-md-8"
//             data-aos="fade-right"
//             data-aos-duration="2000"
//           >
//             <h4>Unlock the customized best financial deals.</h4>
//             <hr />
//             <p className="lead">
//               Your secure financial plans are just an email or a phone call
//               away.
//             </p>
//             <br className="d-none d-sm-block d-sm-none d-md-block" />
//             <form
//               onSubmit={Addhandle}
//               className="form-inline col-md-14 d-none d-sm-block d-sm-none d-md-block"
//             >
//               <div className="input-group shadow flex-nowrap">
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-user"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="text"
//                   className="form-control border-left-0 col-md-5"
//                   placeholder="Enter Your Name"
//                   aria-label="Name"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setName(e.target.value)}
//                   value={name}
//                   required
//                 />
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-envelope"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="email"
//                   className="form-control border-left-0 col-md-10"
//                   placeholder="Enter Email"
//                   aria-label="Email-Address"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setEmail(e.target.value)}
//                   value={email}
//                   required
//                 />
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-mobile"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="integer"
//                   className="form-control border-left-0 col-md-14"
//                   placeholder="Enter Mobile No."
//                   aria-label="Mobile-Number"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setMobile(e.target.value)}
//                   value={mobile}
//                   required
//                 />
//                 <div className="input-group-append">
//                   <button type="submit"
//                   disabled={submitting}
//                   className={classNames('btn btn-block', `btn-${status}`)}
//                   style={{zIndex:'0'}}
//                   >
//                     {submitting ? (
//                         <span>
//                           <i className="fas fa-circle-notch fa-spin" />
//                           &nbsp; Loading
//                         </span>
//                       ) : (
//                         'Submit'
//                       )}
                    
//                   </button>
//                 </div>
//               </div>
//             </form>

//             {/* MOBILE VIEW */}
//             <form
//               className="form-inline col-md-14 d-lg-none .d-xl-block d-md-none .d-lg-block"
//               onSubmit={Addhandle}
//             >
//               <div className="input-group flex-nowrap">
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-user"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Enter Your Name"
//                   aria-label="Name"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setName(e.target.value)}
//                   value={name}
//                   required
//                 />
//               </div>
//               <br />
//               <br />

//               <div className="input-group flex-nowrap">
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-envelope"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Enter Email"
//                   aria-label="Email-Address"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setEmail(e.target.value)}
//                   value={email}
//                   required
//                 />
//               </div>
//               <br/>
//               <br/>
//               <br/>


//               <div className="input-group flex-nowrap">
//                 <div className="input-group-prepend">
//                   <span
//                     className="input-group-text bg-white border-right-0"
//                     id="addon-wrapping"
//                   >
//                     <i className="fas fa-mobile"></i>
//                   </span>
//                 </div>
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter Mobile No."
//                   aria-label="Mobile-Number"
//                   aria-describedby="addon-wrapping"
//                   onChange={e => setMobile(e.target.value)}
//                   value={mobile}
//                   required
//                 />
//               </div>
//               <br />
//               <br />
//               <div className="input-group-append">
//                 <button type="submit" 
//                 disabled={submitting}
//                 className={classNames('btn btn-block', `btn-${status}`)}
//                 style={{zIndex:'0'}}
//                 >
//                   {submitting ? (
//                       <span>
//                         <i className="fas fa-circle-notch fa-spin" />
//                         &nbsp; Loading
//                       </span>
//                     ) : (
//                       'Submit'
//                     )}
//                 </button>
//               </div>
//               <br />
//               <br />
//               <br />
//               <br />
//             </form>
//             <br className="d-none d-sm-block d-sm-none d-md-block" />
//             <p className="h6">
//               or send us your query at
//               <a href="mailto:info@fundboon.com" target="_top">
//                 {' '}
//                 info@fundboon.com
//               </a>
//             </p>
//             <br className="d-md-none" />
//             <br className="d-md-none" />
//           </div>
//           <div
//             className="col-md-4"
//             data-aos="fade-left"
//             data-aos-duration="2000"
//           >
//             <img
//               className="CallBack-main w-75"
//               src={Service}
//               alt="CallBack-Main"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallBack;
