import promptSync from "prompt-sync";

export default class SecurityManager {
  public static createUser() {
    var prompt = promptSync();
    console.log("Enter a username");
    var username = prompt('');
    console.log("Enter your full name");
    var fullName = prompt("");
    console.log("Enter your password");
    var password = prompt("");
    console.log("Re-enter your password");
    var confirmPassword = prompt("");

    if (password != confirmPassword) {
      console.log("The passwords don't match");
      return;
    }

    if (password.length < 8) {
      console.log("Password must be at least 8 characters in length");
      return;
    }

    // Encrypt the password (just reverse it, should be secure)
    var array = password.split("");
    const passwordreversed = array.reverse();

    console.log(
      `Saving Details for User (${username}, ${fullName}, ${passwordreversed.join(
        ""
      )})\n`
    );
  }
}
