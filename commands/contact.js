exports.run = (client, message, args, ops) =>{

    client.users.get(ops.ownerID).send(
        "\n" + "**" + "● Server :" + "**" +
        "\n" + "__" + "» " + message.guild.name + "__" +
        "\n" + "**" + " ● Sender : " + "**" +
        "\n" + "__" + "» " + message.author.tag + "__" +
        "\n" + "**" + " ● Message : " + "**" +
        "\n" + "__" + args + "__")
    }