class CreateMailAccountHelper {
  factory(account: any): object {
    return {
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass
      },
    }
  }
}

export { CreateMailAccountHelper }