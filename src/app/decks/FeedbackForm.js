import React from "react";
import config from "../../config";

const FeedbackForm = ({ onClick }) => (
  <div className="feedback-form border border-secondary rounded rounded p-4 text-center bg-light">
    <div className="mx-auto" style={{ maxWidth: "500px" }}>
      <span>
        We want to hear from you. Let us know what features or content you would like to see.{" "}
        <span role="img" aria-label="Tada emoji">
          🎉
        </span>
      </span>
      <div className="mt-3">
        <a
          href={config.airtableFeedbackUrl}
          onClick={onClick}
          className="btn btn-dark py-2"
          style={{ borderRadius: "999px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-paper-plane mr-2" />
          Start a conversation
        </a>
      </div>
      <div className="mt-3">
        <a
          className="text-secondary text-underline"
          href={config.buyMeACoffeeDonateUrl}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          ...or buy us a coffee{" "}
        </a>
        <span role="img" aria-label="Heart emoji">
          ❤️
        </span>
      </div>
    </div>
  </div>
);

export default FeedbackForm;
