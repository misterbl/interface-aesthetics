// import * as React from "react";
// import Dropzone from "react-dropzone";

// export class UploadScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filesPreview: [],
//       imageSource: ""
//     };
//   }

//   // onDrop = async acceptedFiles => {
//   //   const file = acceptedFiles[0];
//   //   const reader = new FileReader();
//   //   reader.onload = event => {
//   //     if (event && event.target && event.target.result) {
//   //       this.props.onSubmit(event.target.result);
//   //     }
//   //   };
//   //   reader.readAsDataURL(file);
//   // };

//   render() {
//     return (
//       <div className={this.props.className}>
//         <Dropzone
//           style={{}}
//           // accept={this.props.allowedFileFormat}
//           onDrop={files => this.onDrop(files)}
//         >
//           {/* <img src={this.state.imageSource} alt="title" /> */}
//         </Dropzone>
//       </div>
//     );
//   }
// }
