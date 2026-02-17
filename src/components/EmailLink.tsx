import React, { useEffect, useState } from "react";
import { Link } from "@mui/material";

interface EmailLinkProps {
  user: string;
}

const DOMAIN = "nativenotebook.org";


const EmailLink: React.FC<EmailLinkProps> = ({ user }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(`${user}@${DOMAIN}`);
  }, [user]);

  if (!email) return null;

  return (
    <Link href={`mailto:${email}`} underline="hover">
      {email}
    </Link>
  );
};

export default EmailLink;
