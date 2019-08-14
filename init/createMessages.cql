
DROP TABLE IF EXISTS chat.messages;

CREATE TABLE chat.messages (
    message_id uuid,
    from_user text,
    to_user text,
    body text,
    time timeuuid,
    PRIMARY KEY((from_user, to_user), time)
) WITH CLUSTERING ORDER BY (time ASC);
