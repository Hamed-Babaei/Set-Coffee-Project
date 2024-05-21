import styles from "./answer.module.css";

const Answer = ({ answerTicket, type, title, body, createdAt, user }) => {
  console.log("answerTicket222 => ", answerTicket);
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>
          {new Date(
            answerTicket ? answerTicket.createdAt : createdAt
          ).toLocaleDateString("fa-IR")}
        </p>
        <div>
          <div>
            <p>{answerTicket ? answerTicket.user.name : user.name}</p>
            <span>{type === "user" ? "کاربر" : "ادمین"}</span>
          </div>
          <img src="/images/shahin.jpg" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{answerTicket ? answerTicket.body : body}</p>
      </div>
    </section>
  );
};

export default Answer;
