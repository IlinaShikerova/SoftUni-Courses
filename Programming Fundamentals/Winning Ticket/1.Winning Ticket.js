function solve(input) {
  let tickets = input.split(", ");
  for (let ticket of tickets) {
    let ticketL = ticket.length
      if (ticket.length < 20) {
        console.log(`invalid ticket`);
      } else {
        let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;;
        let match = ticket.match(pattern);
        if (match === null) {
          console.log(`ticket "${ticket}" - no match`);
        } else {
          if (match.length === 1) {
            match = match.toString();
            if (match.length >= 10) {
              ticket = ticket.trim();
              console.log(`ticket "${ticket}" - ${10}${match[0]} Jackpot!`);
            }
          } else {
            if (match[0] === match[1]) {
              match[0] = match[0].toString();
              ticket = ticket.trim();
              console.log(
                `ticket "${ticket}" - ${match[0].length}${match[0][0]}`
              );
            }
          }
        }
      }
    }
}

