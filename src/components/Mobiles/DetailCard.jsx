import React, { useState, useEffect } from "react";
import axios from "axios";

// export default class DetailCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       details: [],
//     };
//   }

//   componentDidMount() {
//     axios.get(`http://127.0.0.1:5000/getItem/1`).then(result => {
//       this.setState({
//         details: result.data
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <div className='w-full flex items-center justify-center '>
//           <div className=''>
//             <img src={this.state.details.imageURL} alt=""  />

//           </div>
//           <div >
//           <p>{this.state.details.productName}</p>
//             {this.state.details.features.map((item)=>{
//               return <p>{item}</p>
//             })}
//           </div>
//         </div>

//       </div>
//     );
//   }
// }

const DetailCard = ({ id }) => {
  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = async () => {
    await axios.get(`http://127.0.0.1:5000/getItem/${id}`).then((result) => {
      setDetails(result.data);
      setComments(result.data.comments);
      setClassify(result.data.classify);
      console.log(details);
    });
  };

  const [details, setDetails] = useState({ features: [], comments: [] });
  const [comments, setComments] = useState([]);
  const [classify, setClassify] = useState([]);
  const [comment, setComment] = useState("");

  const addComment = async () => {
    await axios.post(`http://127.0.0.1:5000/addComments/${id}`, {
      comments: comment,
      "user-email": "dineshkumaar@gmail.com",
    });
    getDetails();
  };

  return (
    <div className="container mx-auto w-full flex items-center justify-center gap-9 mt-16 font-poppins md:flex-row  flex-col">
      <div className="flex  md:border-r-2 border-r-0 sm:px-6 px-3 gap-7 h-100v sm:w-1/2 sm:flex-row  flex-col items-center sm:items-start">
        <div className="p-9">
          <img src={details.imageURL} alt="" className="h-80 " />
        </div>
        <div className="flex flex-col justify-start mt-9 ">
          <p className="font-bold text-xl">{details.productName}</p>
          {details.features.map((items) => (
            <p>* {items}</p>
          ))}
          <div className="mt-9 flex flex-col gap-4 border-2 p-4 rounded-xl ">
            <textarea
              type="text"
              placeholder="Comments"
              className="border-2 px-2 py-3 rounded-lg "
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
            <button
              className="px-2 py-1 bg-black text-white rounded-md self-start font-bold hover:text-black hover:bg-white duration-200"
              onClick={addComment}
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-auto flex ml-9 sm:block">
        <div className="flex flex-col justify-center ">
          <p className="font-bold text-xl mb-4">Comments:</p>
          <div className="sm:w-96 flex flex-col  gap-5 ">
            <div className="mb-2 flex flex-col ">
              <p className="font-bold ">Positive comments:</p>
              {comments.map((items, index) => (
                <p>{classify[index] === 1 ? `* ${items}` : null}</p>
              ))}
            </div>
            <div className="">
              <p className="font-bold">Neutral Comments:</p>
              {comments.map((items, index) => (
                <p>{classify[index] === 0 ? `* ${items}` : null}</p>
              ))}
            </div>
            <div>
              <p className="font-bold">Negative comments:</p>
              {comments.map((items, index) => (
                <p>{classify[index] === -1 ? `* ${items}` : null}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
