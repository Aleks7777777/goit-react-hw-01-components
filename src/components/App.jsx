import { FriendsList } from "./FriendsList/FriendsList";
import friends from "./data/friends";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "./data/user";
import data from "./data/data"
import transactions from "./data/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {
	return (
		<div class='page' >
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<FriendsList friends={friends} />
			<Statistics title={"title"}
				stats={data} />
			<TransactionHistory items={transactions} />
		</div>
	);
};
