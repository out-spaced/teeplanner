import React from "react";
import CheckStatus from "./CheckStatus";
import BackToHome from "./BackToHome";

function Complete({ ns, bh }) {
  const links = Array(4);
  for (let i = 0; i < 4; i++) {
    links[i] = i + 1;
  }
  const names = ["alex", "bob", "john", "nick"];
  const linksList = links.map((num, index) => {
    const url = `/join?partyId=1&userId=${num}`;
    return (
      <div className="friend-url-link row-default" key={num}>
        <a href={url}>{names[index]}</a>
      </div>
    );
  });
  return (
    <div id="complete-container">
      <div id="complete-text">
        <span className="text">All done! Will notify you at some point</span>
      </div>
      {linksList}
      <div className="row-default">
        <BackToHome bh={bh} />
        <CheckStatus ns={ns} />
      </div>
    </div>
  );
}

export default Complete;

// Complete.propTypes = {
//   ns: React.propTypes.function
// }
