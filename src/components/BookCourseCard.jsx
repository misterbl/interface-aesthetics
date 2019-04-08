import React from "react";

const BookCourseCard = ({ title, dates }) => (
  <div className="book-course">
    <div>{title}</div>
    <div>
      <form>
        <div className="select-container">
          <select>
            <option selected>Select course date</option>
            {dates.map(date => (
              <option key={date}>{date}</option>
            ))}
          </select>
        </div>
      </form>
    </div>
    <button>BOOK COURSE</button>
  </div>
);

export default BookCourseCard;
