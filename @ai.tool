@workflow.step
async def llm_step(
    model_data: dict[str, object],
    messages_data: list[dict[str, object]],
    tools_data: list[dict[str, object]],
) -> dict[str, object]:
    model = ai.Model.model_validate(model_data)
    messages = [
        ai.messages.Message.model_validate(message)
        for message in messages_data
    ]
    tools = [ai.Tool.model_validate(tool) for tool in tools_data]
    async with ai.stream(model, messages, tools=tools) as stream:
        async for _event in stream:
            pass
    return stream.message.model_dump(mode="json")
@ai.tool
@workflow.step
async def ask_mothership(question: str) -> str:
    """Ask the mothership for a status update."""
    response = await mothership_client.ask(question)
    return response.summary