class StateMachine:
    """
    A small deterministic finite-state machine.

    Transitions are tried in registration order. A guard, when present, receives
    the trigger keyword arguments as one context dictionary and must return a
    truthy value for the transition to fire.
    """

    def __init__(self, initial_state: str):
        if not isinstance(initial_state, str):
            raise TypeError("initial_state must be a string")
        self._state = initial_state
        self._transitions = {}

    @property
    def state(self) -> str:
        return self._state

    def add_transition(self, from_state: str, event: str, to_state: str, guard=None) -> None:
        self._validate_text("from_state", from_state)
        self._validate_text("event", event)
        self._validate_text("to_state", to_state)
        if guard is not None and not callable(guard):
            raise TypeError("guard must be callable or None")
        self._transitions.setdefault((from_state, event), []).append((to_state, guard))

    def trigger(self, event: str, **context) -> bool:
        self._validate_text("event", event)
        transitions = self._transitions.get((self._state, event))
        if transitions is None:
            raise ValueError(f"No transition registered from {self._state!r} on {event!r}")

        for to_state, guard in transitions:
            if guard is None or guard(context):
                self._state = to_state
                return True
        return False

    def _validate_text(self, name: str, value: str) -> None:
        if not isinstance(value, str):
            raise TypeError(f"{name} must be a string")
