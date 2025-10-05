export default function EmailSettingsUI() {
  if (process.env.BREVO_API_KEY) {
    return (
      <div>
        <div>
          Active email setting: <strong>Brevo</strong>
        </div>
        <span>Brevo API Key: </span>
        <span>********{process.env.BREVO_API_KEY.slice(process.env.BREVO_API_KEY.length - 6)}</span>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          Active email setting: <strong>SMTP</strong>
        </div>
        <div>SMTP settings</div>
        <span>SMTP_HOST: </span>
        <span>{process.env.SMTP_HOST}</span>
      </div>
    );
  }
}
