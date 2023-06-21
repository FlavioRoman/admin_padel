import Hero from "./Hero";
import Table from "./Table";
import PlayersList from "./List/PlayersList";
import TournamentList from "./List/TournamentList";
import CreatePlayerForm from "./Create/CreatePlayerForm";
import CreateTournamentForm from "./Create/CreateTournamentForm";

import { AiFillHome } from "react-icons/ai";
import { AiFillTrophy } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { GiTrophiesShelf } from "react-icons/gi";
import { TbTournament } from "react-icons/tb";
import { MdEmojiPeople } from "react-icons/md";

export const Options = [
  { icon: <AiFillHome size="25" />, name: "Inicio", label: <Hero /> },
  {
    icon: <MdEmojiPeople size="25" />,
    name: "Jugador",
    label: <CreatePlayerForm />,
  },
  {
    icon: <AiFillTrophy size="25" />,
    name: "Torneo",
    label: <CreateTournamentForm />,
  },
  {
    icon: <IoIosPeople size="25" />,
    name: "Jugadores",
    label: <PlayersList />,
  },
  {
    icon: <GiTrophiesShelf size="25" />,
    name: "Torneos",
    label: <TournamentList />,
  },
  { icon: <TbTournament size="25" />, name: "Llave", label: <Table /> },
];

const [inicio, jugador, torneo, jugadores, torneos, llave] = Options;
export const initialTabs = [inicio, jugador, torneo, jugadores, torneos, llave];
