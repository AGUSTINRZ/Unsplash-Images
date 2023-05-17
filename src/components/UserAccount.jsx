import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function UserAccount({ user }) {
	return (
		<section className="p-2 border-t border-zinc-300 mb-4">
			<section className="flex items-start gap-2">
				<img
					src={user.profile_image.large}
					alt=""
					className="w-14 rounded-full"
				/>
				<div className="text-start">
					<h3 className="font-semibold text-xl">
						{user.name}{" "}
						<span className="font-normal text-lg">({user.username})</span>
					</h3>
					<div className="flex gap-2">
						<span>
							Followers <strong>{user.followers_count}</strong>
						</span>
						<span>
							Following <strong>{user.following_count}</strong>
						</span>
						<span>
							Photos <strong>{user.total_photos}</strong>
						</span>
					</div>
				</div>
			</section>
			<section className="mt-2 text-start">
				<p>{user.bio}</p>
			</section>
			<section className="flex gap-4 flex-wrap items-center justify-around md:justify-start text-lg mt-2">
				{user.social.instagram !== null && (
					<a
						href={`https://instagram.com/${user.social.instagram_username}`}
						target="_blank"
						rel="noreferrer"
						className="flex gap-1 items-center hover:text-pink-500 transition-colors w-fit"
					>
						<FontAwesomeIcon icon={faInstagram} />
						Instagram
					</a>
				)}
				{user.social.twitter_username !== null && (
					<a
						href={`https://twitter.com/${user.social.twitter_username}`}
						target="_blank"
						rel="noreferrer"
						className="flex gap-1 items-center hover:text-blue-400 transition-colors w-fit"
					>
						<FontAwesomeIcon icon={faTwitter} />
						Twitter
					</a>
				)}
				{user.location !== null && (
					<div className="flex items-center gap-1">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>{user.location}</span>
					</div>
				)}
			</section>
		</section>
	);
}

UserAccount.propTypes = {
	user: PropTypes.object,
};

export default UserAccount;
