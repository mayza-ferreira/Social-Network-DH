create table users
(
    id         varchar                                                                     not null
        primary key,
    username   varchar                                                                     not null,
    password   varchar,
    created_at timestamp default '2023-08-02 17:01:39.132665'::timestamp without time zone not null,
    photo_url  varchar,
    name       varchar                                                                     not null,
    bio        varchar
);

create table user_follows
(
    id         varchar                                                                     not null
        primary key,
    user_id_1  varchar                                                                     not null,
    user_id_2  varchar,
    created_at timestamp default '2023-08-02 18:05:24.501727'::timestamp without time zone not null
);

create table messages
(
    id         varchar                                                                    not null
        primary key,
    user_id    varchar                                                                    not null,
    parent     varchar,
    message    varchar                                                                    not null,
    created_at timestamp default '2023-08-02 17:01:39.14482'::timestamp without time zone not null
);

create table message_hashes
(
    id         varchar                                                                    not null
        primary key,
    message_id varchar                                                                    not null,
    created_at timestamp default '2023-08-02 17:01:39.15319'::timestamp without time zone not null,
    hash       varchar                                                                    not null
);

create table databasechangelog
(
    id            varchar(255) not null,
    author        varchar(255) not null,
    filename      varchar(255) not null,
    dateexecuted  timestamp    not null,
    orderexecuted integer      not null,
    exectype      varchar(10)  not null,
    md5sum        varchar(35),
    description   varchar(255),
    comments      varchar(255),
    tag           varchar(255),
    liquibase     varchar(20),
    contexts      varchar(255),
    labels        varchar(255),
    deployment_id varchar(10)
);

create table databasechangeloglock
(
    id          integer not null
        primary key,
    locked      boolean not null,
    lockgranted timestamp,
    lockedby    varchar(255)
);


INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('users', 'tomcat', 'db/changelog/users.xml', '2023-08-08 15:09:21.304374', 1, 'EXECUTED', '8:5a53c214c2019c616d827a1e8a62756b', 'createTable tableName=users', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('users-2', 'tomcat', 'db/changelog/users.xml', '2023-08-08 15:09:21.310136', 2, 'EXECUTED', '8:11e58e458ef6c3ac654d879529edc9de', 'addColumn tableName=users', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('users-3', 'tomcat', 'db/changelog/users.xml', '2023-08-08 15:09:21.314090', 3, 'EXECUTED', '8:3b31c8f2978253cc1671de5bd413fbbd', 'addColumn tableName=users', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('users-4', 'tomcat', 'db/changelog/users.xml', '2023-08-08 15:09:21.319353', 4, 'EXECUTED', '8:60afbf35985025a2380919c9e94649c9', 'dropDefaultValue columnName=name, tableName=users', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('users-5', 'tomcat', 'db/changelog/users.xml', '2023-08-08 15:09:21.322583', 5, 'EXECUTED', '8:167bfed6b24499303a9289d793155695', 'addColumn tableName=users', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('messages', 'tomcat', 'db/changelog/messages.xml', '2023-08-08 15:09:21.328538', 6, 'EXECUTED', '8:3c26c4dfe5a56c6db9b8c1ecdb5ddfc4', 'createTable tableName=messages', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('message_hashes', 'tomcat', 'db/changelog/message_hashes.xml', '2023-08-08 15:09:21.334025', 7, 'EXECUTED', '8:4af8980db5669d7ae258d06a8f1c1a45', 'createTable tableName=message_hashes', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('message-hashes-2', 'tomcat', 'db/changelog/message_hashes.xml', '2023-08-08 15:09:21.337557', 8, 'EXECUTED', '8:4fefe98005ca2829761b276f964563d9', 'addColumn tableName=message_hashes', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('message-hashes-3', 'tomcat', 'db/changelog/message_hashes.xml', '2023-08-08 15:09:21.341246', 9, 'EXECUTED', '8:16064d6d9a0169e4f1ada85935ce8d1d', 'dropColumn columnName=message, tableName=message_hashes', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('message-hashes-4', 'tomcat', 'db/changelog/message_hashes.xml', '2023-08-08 15:09:21.344250', 10, 'EXECUTED', '8:e574577664e978773b7883517075f02a', 'dropColumn columnName=user_id, tableName=message_hashes', '', null, '4.20.0', null, null, '1518161286');
INSERT INTO databasechangelog (id, author, filename, dateexecuted, orderexecuted, exectype, md5sum, description, comments, tag, liquibase, contexts, labels, deployment_id) VALUES ('user_follows', 'tomcat', 'db/changelog/user_follows.xml', '2023-08-08 15:09:21.349792', 11, 'EXECUTED', '8:3a2e3b56aefb0990e5f3bec8be58c013', 'createTable tableName=user_follows', '', null, '4.20.0', null, null, '1518161286');


