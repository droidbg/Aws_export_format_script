# AWS Export Format

`aws-export-format` is a simple CLI tool that takes a JSON input containing AWS credentials and generates export commands for the AWS CLI. This is particularly useful for quickly setting up environment variables for AWS CLI sessions.

## Installation

You can use this package directly with `npx`. No need to install it globally.

```bash
npx aws-export-format
```

If you're using it for the first time, you may need to confirm the installation by typing yes.

## Usage

1. Run the command:

```bash
npx aws-export-format
```

2. Paste your JSON input.

```
{
  "Credentials": {
    "AccessKeyId": "your-access-key-id",
    "SecretAccessKey": "your-secret-access-key",
    "SessionToken": "your-session-token"
  }
}
```

3. Press Enter twice after pasting the JSON input.

4. The tool will output the export commands for setting up your AWS environment variables:

```
export AWS_ACCESS_KEY_ID=your-access-key-id
export AWS_SECRET_ACCESS_KEY=your-secret-access-key
export AWS_DEFAULT_REGION=ap-south-1
export AWS_SESSION_TOKEN=your-session-token
```

5. Copy and paste these commands into your terminal to set up the environment variables.

## Example

```
$ npx aws-export-format
Please enter the JSON input (press Enter twice when done):
{
    "Credentials": {
        "SecretAccessKey": "secret-access-key",
        "SessionToken": "temporary-session-token",
        "Expiration": "expiration-date-time",
        "AccessKeyId": "access-key-id"
    }
}

export AWS_ACCESS_KEY_ID=access-key-id
export AWS_SECRET_ACCESS_KEY=secret-access-key
export AWS_DEFAULT_REGION=ap-south-1
export AWS_SESSION_TOKEN=temporary-session-token
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
