import React from "react";

export interface NewLetterProps {}

export default function NewLetter(props: NewLetterProps) {
  return (
    <div className="all_letter">
      <div className="all_letter_left">
        <h1 className="all_letter_h1">Newsletter</h1>
        <div className="all_letter_div_p">
          <p className="all_letter_p">
            Subscribe here for all the news that is fit to fly - delivered
            straight to your inbox! You can opt out anytime.
          </p>
        </div>
        <div className="all_letter_div_p">
          <p className="all_letter_p">
            By subscribing, you agree to receive emails from us. Please review
            our privacy policy for more information. You can unsubscribe at any
            time
          </p>
        </div>
      </div>
      <div className="all_letter_right">
        <input
          type="text"
          placeholder="Email Address"
          className="all_letter_input"
        />
        <button className="all_letter_submit">Submit</button>
      </div>
    </div>
  );
}
