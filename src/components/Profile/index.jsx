import { useState } from "react";
import LinkButtons from "../LinkButton";
import Title from "../Title";
import ProfileSection from "./ProfileSection";
import styles from "./styles.module.css";

export default function Profile({
  avatar,
  name,
  bio,
  email,
  phone,
  githubUrl,
  linkedinUrl,
  instaUrl,
}) {
  // Valor, funçãoModificadora
  const [followText, setFollowText] = useState("Follow")
    function handleClick(ev) {
    alert("Você agora está me seguindo!");
    setFollowText("Following")
  }
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt="Minha foto de Perfil" />
      <Title>
        <span>{name}</span>
        <button className={styles.followButton} onClick={handleClick}>
          {followText}
        </button>
      </Title>

      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>

      <ProfileSection className={styles.links}>
        <LinkButtons href={githubUrl} target="_blank">
          GitHub
        </LinkButtons>
        <LinkButtons href={linkedinUrl} target="_blank">
          LinkedIn
        </LinkButtons>
        <LinkButtons href={instaUrl} target="_blank">
          Instagram
        </LinkButtons>
      </ProfileSection>
    </div>
  );
}
