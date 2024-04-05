export type ConnectionInfo = {
  name: string;
}

export type Fisher = {
  name: string;
  hasCast: boolean;
}

export type Crew = {
  fishers: Array<Fisher>;
}
