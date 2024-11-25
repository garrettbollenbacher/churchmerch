import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-white border-b border-gray-200 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-gray-900" to="/">
          ChurchMerch
        </Link>
        <div>
          <Link
            className="text-lg font-medium text-gray-700 hover:text-gray-900"
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// const Header: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           ChurchMerch
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
