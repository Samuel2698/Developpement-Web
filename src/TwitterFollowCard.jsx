import "./App.css";

const TwitterFollowCard = ({
  children,
  userName = "unknown",
  name,
  isFollowing,
}) => {
  const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de un gato"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
