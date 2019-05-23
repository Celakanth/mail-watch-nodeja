/*
    config file for env props
    config.json
    {
        "MailListener" :{
            "username": "imap-username",
            "password": "imap-password",
            "host": "imap-host",
            "port": 993,
            "tls": true,
            "connTimeout": 10000,
            "authTimeout": 5000,
            "debug": "console.log",
            "tlsOptions": { "rejectUnauthorized": false },
            "mailbox": "INBOX",
            "searchFilter": ["UNSEEN", "FLAGGED"],
            "markSeen": true,
            "fetchUnreadOnStart": true,
            "mailParserOptions": {"streamAttachments": true},
            "attachments": true,
            "attachmentOptions": { "directory": "attachments/" }
        }
    }
*/