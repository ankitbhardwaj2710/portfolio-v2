import { GitHubCalendar } from "react-github-calendar";

const cosmicTheme = {
  light: [
    "#121018",
    "#3f2368",
    "#61369c",
    "#854bd1",
    "#b56cff",
  ],
  dark: [
    "#121018",
    "#3f2368",
    "#61369c",
    "#854bd1",
    "#b56cff",
  ],
};

function GitHubActivity({ compact = false }) {
  return (
    <div
      className={`github-calendar-wrap ${
        compact ? "github-calendar-compact" : ""
      }`}
    >
      <div className="github-calendar-header">
        <div>
          <span className="github-label">
            GITHUB ACTIVITY
          </span>

          <strong>
            @ankitbhardwaj2710
          </strong>
        </div>

        <a
          href="https://github.com/ankitbhardwaj2710"
          target="_blank"
          rel="noreferrer"
        >
          VIEW GITHUB ↗
        </a>
      </div>

      <div className="github-calendar">
        <GitHubCalendar
          username="ankitbhardwaj2710"
          theme={cosmicTheme}
          colorScheme="dark"

          blockSize={compact ? 9 : 12}
          blockMargin={compact ? 3 : 4}
          blockRadius={2}
          fontSize={compact ? 9 : 11}

          labels={{
            totalCount:
              "{{count}} contributions in the last year",
          }}

          tooltips={{
            activity: {
              text: (activity) => {
                const date = new Date(
                  `${activity.date}T00:00:00`
                );

                const formattedDate =
                  date.toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  );

                const count = activity.count;

                return `${count === 0 ? "No" : count} ${
                  count === 1
                    ? "contribution"
                    : "contributions"
                } on ${formattedDate}`;
              },

              withArrow: true,
            },
          }}
        />
      </div>
    </div>
  );
}

export default GitHubActivity;