import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Hey 👋,</h1>
    <p>
      Thank you for interest in my template project. Stay tuned for more info as
      it progresses towards release.
    </p>
    <p>
      You can follow me on twitter for more often updates.{" "}
      <a href="https://twitter.com/GSVarner">@GSVarner</a>
    </p>
  </div>
);
