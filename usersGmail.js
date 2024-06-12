let biniEmail = {
    name: 'biniEmail',
    mailboxes: [
        {Inbox: []},
        {Sent: []},
        {draft: []},
        {Junk: []},
        {Trash:[]}
    ],
    contacts: [
        {
            name: 'Mogges',
            email: 'Mogges@example.com',
            lastMessage: "I won't be in class today."
        },
        {
            name: 'Meku',
            email: 'Meku@example.com',
            lastMessage: "Today, we are going to rock it!"
        },
        {
            name: 'Aster',
            email: 'Aster@fake.com',
            lastMessage: "See you at the meeting."
        }
    ],
    emails: [
        {
            sender: 'Mogges',
            recipient: 'Me',
            subject: 'Class Update',
            body: "I won't be in class today.",
            timestamp: '2024-06-10 08:30:00'
        },
        {
            sender: 'Meku',
            recipient: 'Me',
            subject: 'Team Meeting',
            body: "Today, we are going to rock it!",
            timestamp: '2024-06-10 09:00:00'
        },
        {
            sender: 'Aster',
            recipient: 'Me',
            subject: 'Meeting Reminder',
            body: 'See you at the meeting.',
            timestamp: '2024-06-10 10:00:00'
        }
    ],
    folders: {
        work: [
            {
                sender: 'Mogger',
                recipient: 'Me',
                subject: 'Class Update',
                body: "I won't be in class today.",
                timestamp: '2024-06-10 08:30:00'
            },
            {
                sender: 'MMeku',
                recipient: 'Me',
                subject: 'Team Meeting',
                body: "Today, we are going to rock it!",
                timestamp: '2024-06-10 09:00:00'
            }
        ],
        personal: [
            {
                sender: 'Aster',
                recipient: 'Me',
                subject: 'Meeting Reminder',
                body: 'See you at the meeting.',
                timestamp: '2024-06-10 10:00:00'
            }
        ]
    }
};

// Mail box lists
let mailBoxesLists = biniEmail.mailboxes;
console.log(mailBoxesLists)

// List of emails
let listOfEmails = biniEmail.emails;
console.log(listOfEmails)

//get the body of second email
let secondEmailText = biniEmail.emails[1].body;
console.log(secondEmailText)

//mark an email as sent
biniEmail.mailboxes[1].Sent.push(biniEmail.emails[1])
console.log(biniEmail.mailboxes)

//add a draft email to draft mailbox
biniEmail.mailboxes[2].draft.push(biniEmail.emails[2])






