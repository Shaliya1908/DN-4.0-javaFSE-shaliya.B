import React from 'react';

function App() {
  // Office object
  const office = {
    name: "Premium Office Space",
    rent: 55000,
    address: "5th Floor, Cyber Towers, Hyderabad",
    image: "/office.jpg.webp"

  };

  // List of office objects
  const officeList = [
    { name: "EcoSpace", rent: 45000, address: "Madhapur, Hyderabad" },
    { name: "TechHub", rent: 65000, address: "Gachibowli, Hyderabad" },
    { name: "BizNest", rent: 60000, address: "HiTech City, Hyderabad" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img src={office.image} alt="Office" style={{ width: "300px", height: "200px" }} />

      {/* Single Office Info */}
      <h2>{office.name}</h2>
      <p><strong>Address:</strong> {office.address}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: office.rent > 60000 ? "green" : "red" }}>
          ₹{office.rent}
        </span>
      </p>

      {/* Office List Rendering */}
      <h3>Available Spaces</h3>
      <ul>
        {officeList.map((o, index) => (
          <li key={index}>
            <strong>{o.name}</strong> - {o.address} -
            <span style={{ color: o.rent > 60000 ? "green" : "red", marginLeft: "5px" }}>
              ₹{o.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

